import React, { useEffect, useState, useCallback } from 'react';

import { atom, Tag, Button } from '../common';
import * as S from './style/Detail.style';
import { Avatar } from '../common';
import { EnquiryCp } from 'src/components/Comment';
import getDate from 'src/lib/utils/dateForm';

import { Editor } from 'src/components/Editor';
import { HtmlViewer } from 'src/components/Editor';
import { Enquiry, OutsourceDetail, QuestionDetail, Tags } from 'src/types';
import { keys, useAddEnquiry, useAuth, useDelete, useDidMountEffect, useQueryCount } from 'src/hooks';
import { o, q } from 'src/api';
import { WriteOutsourcing } from '../Write';
import { useQuery, useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { message } from 'antd';
import { FolderMenu } from '../SideContent';
import { theme } from 'src/styles/Theme';
import { Msg } from '../MyInfo/style/MyInfo.style';
type Props = {
  children?: React.ReactElement; // commentComponent
  data?: OutsourceDetail;
};

const ODetail = ({ children, data }: Props) => {
  const { auth, refetch } = useAuth();
  const { setCount, setInfCount } = useQueryCount();
  useEffect(() => {
    /** 조회수 */
    setInfCount({ queryKey: keys.outsources(), changeKey: 'watch', findId: data.id, countVal: data.watch });
  }, []);
  const router = useRouter();

  const queryClient = useQueryClient();

  const [mdStr, setMdStr] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const { data: enquiries } = useQuery(keys.enquiries(data?.id), () => o.getEnquiries(data.id), {
    enabled: data?.enquiriesCount > 0,
  });
  const del = useDelete(data?.id, keys.oDetail(data?.id), data.id);
  const add = useAddEnquiry(data?.id);

  const onSubmitEnquiry = useCallback(() => {
    let len = mdStr.substring(0, 14).replace(/\<p\>|\<\/p\>|\<br\>/g, '').length;

    if (len < 5) return message.error('5글자 이상 작성 하여야 합니다.');
    const enquiryData = { content: mdStr, oid: data.id };
    add.mutate(enquiryData);
  }, [mdStr, data.id, add]);

  const errMsg = queryClient.getQueryData('serverErrorMessage') as string;

  useDidMountEffect(() => {
    if (add.isSuccess) {
      message.success('답변이 등록되었습니다.');
      setMdStr('');
      return;
    }
    if (del.isSuccess) {
      router.push('/');
    }
    if (add.isError || del.isError) {
      message.error(errMsg);
    }
  }, [add?.isError, add?.isSuccess, del?.isError, del.isSuccess, errMsg, router]);

  const removeHandler = useCallback(() => {
    if (confirm('삭제시 복구가 불가능 합니다')) {
      del.mutate(o.delOutsource);
    }
  }, [del]);
  return (
    <S.DetailContainer>
      {isEdit && data ? (
        <WriteOutsourcing data={data} setIsEdit={setIsEdit} />
      ) : (
        <>
          <S.ContentWrapper>
            <S.ContentHeader>
              <div className="detailInfo">
                <Avatar nickname={data.author.nickname} url={data.author.avatar} id={data.author.id} />
                <atom.CreatedAt>{getDate(data.createdAt)}</atom.CreatedAt>
              </div>
              <S.Title> {data.title}</S.Title>
              <br />
              <atom.TagWrapper>
                {data.tagNames.map((tag: Tags) => (
                  <Tag key={data.id + tag.id}>{tag.name}</Tag>
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

          <S.ProjectProgress>
            <FolderMenu title={'⏳ 프로젝트 진행상황 ⏳'}>
              <>
                <p>작업금액 : {data.coin}</p>
                <p> 메이커 매칭 전 입니다</p>
              </>
            </FolderMenu>
          </S.ProjectProgress>

          <S.EditorWrapper>
            <h3>🧘‍♂️글을 남겨 본인을 어필해보세요.</h3>
            <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="400px" />
          </S.EditorWrapper>
          <Button onClick={onSubmitEnquiry} types="primary" $fill $block css={{ width: '200px' }}>
            등록
          </Button>
          <S.AnswerContainer>
            {enquiries && enquiries[0]?.id ? (
              enquiries.map((answer) => <EnquiryCp key={answer.id} enquiry={answer} out={data} />)
            ) : (
              <S.NodataWrapper>등록된 답변이 없습니다. 답변을 등록해보세요.</S.NodataWrapper>
            )}
          </S.AnswerContainer>
        </>
      )}
    </S.DetailContainer>
  );
};

export default ODetail;
