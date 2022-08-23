import React, { useState } from 'react';

import { atom, Tag, Button } from '../common';
import * as S from './style/Detail.style';
import { Avatar } from '../common';
import { RAnswer } from './Comment';
import getDate from 'src/lib/dateForm';

import Question_icon from 'src/assets/icon/question.svg';
import { Editor } from 'src/components/Editor';
import { MarkDownViewer, ReactMarkdownViewer } from 'src/components/Editor';
import { QuestionDetail, Tags } from 'src/types';
import { keys, useDelete } from 'src/hooks';
import { o, q } from 'src/api';
import { UpdateEditor } from '../Write';

type Props = {
  children?: React.ReactElement; // commentComponent
  data?: QuestionDetail;
};

const ODetail = ({ children, data }: Props) => {
  const [mdStr, setMdStr] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const del = useDelete(data?.id, keys.outsources());
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
              <Question_icon />
              <S.Title> {data.title}</S.Title>
              <atom.TagWrapper>
								{data.tagNames.map((tag:Tags)=> (<Tag key ={data.id+tag.id} bg={true}>{tag.name}</Tag>))}

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
            <S.SubmitBtn>등록</S.SubmitBtn>
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
            <RAnswer acceped_answer={true} />
            <RAnswer />
            <RAnswer />
            <RAnswer />
          </S.AnswerContainer>
        </>
      )}
    </S.DetailContainer>
  );
};

export default ODetail;
