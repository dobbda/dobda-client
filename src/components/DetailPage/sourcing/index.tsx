import React, { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { atom, Tag, Button, Empty } from '../../common';
import * as S from '../style/Detail.style';
import { Avatar } from '../../common';
import getDate from 'src/lib/utils/dateForm';

import { HtmlViewer } from 'src/components/Editor';
import { Enquiry, OutsourceDetail, QuestionDetail, Tags } from 'src/interface';
import {
  keys,
  useAddEnquiry,
  useAuth,
  useDelete,
  useDidMountEffect,
  useErrMsg,
  useQueryCount,
} from 'src/hooks';
import { o, q } from 'src/api';
import { useQuery, useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { message } from 'antd';

import { ProgressState } from './sourcingEvent';
import { Skeleton } from 'src/components/Skeleton';
import { Editor } from 'src/components/Editor';
import { DetailBottom } from '../style/Detail.style';

const WriteSourcing = dynamic(
  () => import('src/components/Write/WriteSourcing'),
);
const EnquiryCp = dynamic(() => import('src/components/Comment/Enquiry'));

type Props = {
  children?: React.ReactElement; // commentComponent
  data?: OutsourceDetail;
};

const SourcingPage = ({ children, data }: Props) => {
  const { auth, refetch } = useAuth();
  const { setCount, setInfCount } = useQueryCount();
  useEffect(() => {
    /** 조회수 */
    setInfCount({
      queryKey: keys.sourcings(),
      changeKey: 'watch',
      findId: data.id,
      countVal: data.watch,
    });
  }, []);
  const router = useRouter();

  const [html, setHtml] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const { data: enquiry, isLoading: enquiryLoading } = useQuery(
    keys.enquiry(data?.id),
    () => o.getEnquiry(data.id),
    {
      enabled: data?.enquiryCount > 0,
    },
  );
  const del = useDelete(data?.id, keys.oDetail(data?.id), data.id);
  const add = useAddEnquiry(data?.id);

  const onSubmitEnquiry = useCallback(() => {
    let len = html.substring(0, 14).replace(/\<p\>|\<\/p\>|\<br\>/g, '').length;

    if (len < 5) return message.error('5글자 이상 작성 하여야 합니다.');
    const enquiryData = { content: html, oid: data.id };
    add.mutate(enquiryData);
  }, [html, data.id, add]);

  const { errMsg } = useErrMsg();

  useDidMountEffect(() => {
    if (add.isSuccess) {
      message.success('답변이 등록되었습니다.');
      setHtml('');
      return;
    }
    if (del.isSuccess) {
      router.push('/');
    }
    if (add.isError || del.isError) {
      message.error(errMsg);
    }
  }, [
    add?.isError,
    add?.isSuccess,
    del?.isError,
    del.isSuccess,
    errMsg,
    router,
  ]);

  const removeHandler = useCallback(() => {
    if (confirm('삭제시 복구가 불가능 합니다')) {
      del.mutate(o.delOutsource);
    }
  }, [del]);
  return (
    <S.DetailContainer>
      {isEdit && data ? (
        <WriteSourcing data={data} setIsEdit={setIsEdit} />
      ) : (
        <>
          <S.ContentWrapper>
            <S.ContentHeader>
              <div className="detailInfo">
                <Avatar
                  nickname={data.author.nickname}
                  url={data.author.avatar}
                  id={data.author.id}
                />
                <atom.CreatedAt>{getDate(data.createdAt)}</atom.CreatedAt>
              </div>
              <S.Title> {data.title}</S.Title>
              <br />
              <atom.TagWrapper>
                {data.tagNames.map((tag: Tags) => (
                  <Tag key={tag.id}>{tag.name}</Tag>
                ))}
              </atom.TagWrapper>

              {auth?.id == data.author?.id && (
                <S.OnyUser className="only-author">
                  <Button onClick={() => setIsEdit(true)} types="primary" $fill>
                    수정
                  </Button>
                  <Button onClick={removeHandler} types="primary">
                    삭제
                  </Button>
                </S.OnyUser>
              )}
            </S.ContentHeader>

            <S.ContentViewWrapper>
              <HtmlViewer content={data.content} />
            </S.ContentViewWrapper>
          </S.ContentWrapper>

          <ProgressState data={data} />

          <DetailBottom>
            <S.EditorWrapper>
              <h3>🧘‍♂️답글을 남겨보세요.</h3>
              <Editor
                html={html}
                setHtml={setHtml}
                onClickShow={true}
                height="300px"
                submitBtn={
                  <Button
                    onClick={onSubmitEnquiry}
                    types="primary"
                    $fill
                    $block
                    css={{ width: '200px', marginTop: '10px' }}
                  >
                    등록
                  </Button>
                }
              />
            </S.EditorWrapper>

            <S.AnswerContainer>
              {enquiry?.length > 0 ? (
                enquiryLoading ? (
                  <Skeleton
                    border
                    title
                    avatar
                    len={data.enquiryCount}
                    row={3}
                  />
                ) : (
                  enquiry.map((answer) => (
                    <EnquiryCp key={answer.id} enquiry={answer} out={data} />
                  ))
                )
              ) : (
                <Empty descript="등록된 글이 없습니다." />
              )}
            </S.AnswerContainer>
          </DetailBottom>
        </>
      )}
    </S.DetailContainer>
  );
};

export default SourcingPage;
