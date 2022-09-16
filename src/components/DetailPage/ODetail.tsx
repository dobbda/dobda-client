import React, { useEffect, useState, useCallback } from 'react';

import { atom, Tag, Button } from '../common';
import * as S from './style/Detail.style';
import { Avatar } from '../common';
import { EnquiryCp } from './Comment';
import getDate from 'src/lib/dateForm';

import { Editor } from 'src/components/Editor';
import { MarkDownViewer } from 'src/components/Editor';
import { Enquiry, OutsourceDetail, QuestionDetail, Tags } from 'src/types';
import { keys, useAddEnquiry, useDelete, useDidMountEffect, useQueryCount } from 'src/hooks';
import { o, q } from 'src/api';
import { UpdateEditor } from '../Write';
import { useQuery, useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

type Props = {
  children?: React.ReactElement; // commentComponent
  data?: OutsourceDetail;
};

const ODetail = ({ children, data }: Props) => {
  const router = useRouter();

  const queryClient = useQueryClient();

  const [mdStr, setMdStr] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const { data: enquiries } = useQuery(keys.enquiries(data?.id), () => o.getEnquiries(data.id), {
    enabled: data?.enquiriesCount > 0,
  });
  const del = useDelete(data?.id, keys.oDetail(data?.id));
  const add = useAddEnquiry(data?.id);

  const onSubmitEnquiry = useCallback(() => {
    const enquiryData = { content: mdStr, oid: data.id };
    add.mutate(enquiryData);
  }, [mdStr, data.id, add]);

  const { setCount, setInfCount } = useQueryCount();
  useEffect(() => {
    setInfCount({ queryKey: keys.outsources(), changeKey: 'watch', findId: data.id, countVal: data.watch });
  });

  const errMsg = queryClient.getQueryData('serverErrorMessage') as string;
  useDidMountEffect(() => {
    if (add.isSuccess) {
      toast.success('답변이 등록되었습니다.', { autoClose: 1000 });
      setMdStr('');
    }
    if (del.isSuccess) {
      router.push('/');
    }

    if (add.isError || del.isError) {
      toast.error(errMsg, { autoClose: 1000 });
    }
  }, [add.isError, add.isSuccess, del.isError, del.isSuccess, errMsg, router]);

  return (
    <S.DetailContainer>
      {isEdit && data ? (
        <UpdateEditor oldData={data} category="outsource" setIsEdit={setIsEdit} />
      ) : (
        <>
          <S.ContentWrapper>
            <S.ContentHeader>
              <div className="detailInfo">
                <Avatar nickname={data.author.nickname} url={data.author.avatar} />
                <atom.CreatedAt>{getDate(data.createdAt)}</atom.CreatedAt>
              </div>
              <span>질문</span>
              <S.Title> {data.title}</S.Title>
              <atom.TagWrapper>
                {data.tagNames.map((tag: Tags) => (
                  <Tag key={data.id + tag.id}>{tag.name}</Tag>
                ))}
              </atom.TagWrapper>

              <S.OnyUser className="only-author">
                <Button onClick={() => setIsEdit(true)} type="primary" ghost>
                  수정
                </Button>
                <Button onClick={() => del.mutate(o.delOutsource)} type="primary" danger ghost>
                  삭제
                </Button>
              </S.OnyUser>
            </S.ContentHeader>

            <S.ContentViewWrapper>
              <MarkDownViewer content={data.content} />
            </S.ContentViewWrapper>
          </S.ContentWrapper>

          <S.EditorWrapper>
            <h3>대화를 나눠보세요</h3>
            <br />
            <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="400px" />
            <br />
            <br />
            <S.SubmitBtn onClick={onSubmitEnquiry}>등록</S.SubmitBtn>
          </S.EditorWrapper>

          <S.OutSourcingInfo>
            <div className="progress-message">
              <div css={{ color: '#a802d1', fontWeight: 'bold', marginBottom: '5px' }}>[ 금액 : 100,000 ]</div>
              <div css={{ color: '#16bd00', fontWeight: 'bold' }}>{'^*^ 프리랜서 선택전이니 자신을 어필해보세요 '}</div>
            </div>
            <div className="btn-group">
              {/* <Button>취소하기</Button> */}
              <Button types="cancel">취소하기</Button>
            </div>
          </S.OutSourcingInfo>

          <S.AnswerContainer>
            {enquiries && enquiries[0]?.id ? (
              enquiries.map((answer) => <EnquiryCp key={answer.id} data={answer} />)
            ) : (
              <atom.NoData>등록된 답변이 없습니다. 답변을 등록할 수 있습니다.</atom.NoData>
            )}
          </S.AnswerContainer>
        </>
      )}
    </S.DetailContainer>
  );
};

export default ODetail;
