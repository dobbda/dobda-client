import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';

import ReplyCp from './Reply';
import { Editor, MarkDownViewer } from 'src/components/Editor';
import { Avatar, atom } from 'src/components/common';
import getDate from 'src/lib/dateForm';
import { EditAnswer } from './EditAnswer';
import * as S from './style/style';
import { ArrowIcon, MoreIcon, ReCommentIcon } from 'src/assets/icons';
import { SubmitBtn } from '../style/Detail.style';
import { Answer } from 'src/types';
import { useQuery } from 'react-query';
import { q } from 'src/api';
import { keys, useDelete,useAddComment } from 'src/hooks';
import { Button, Popover } from 'antd';
import { toast } from 'react-toastify';
type Props = {
  data: Answer;
};

const AnswerCp = ({ data }: Props) => {
  const [isEdit, setisEdit] = useState(false);
  const [mdStr, setMdStr] = useState('');
  const [viewChild, setviewChild] = useState<boolean>(false);
  const { data: comments } = useQuery(keys.comment(data.id), () => q.getComments(data.id), {
    enabled: data.commentsCount > 0 && viewChild,
  });

  const addReply = useAddComment(data?.id);
  const { mutate: delMute } = useDelete(data?.id, keys.answers(data?.questionId));

  const onSubmitComment = useCallback(() => {
   addReply.mutate({ content: mdStr, aid: data.id });

  }, [addReply, mdStr, data.id]);

  useEffect(() => {
		if (addReply.isSuccess) {setMdStr('')}
		if (addReply.isError) {toast.success(addReply.error.response.data.message, { autoClose: 1000 });}
  }, [addReply.isSuccess, addReply.isError, addReply.error?.response.data.message]);

  return (
    <S.CommentWrapper>
      <S.Header className="header">
        <Avatar nickname={data?.author.nickname} url={data?.author.avatar} />
        <atom.Flex >
					<Button>채택하기</Button>
          <>
            <Popover
              trigger="click"
							placement='bottom'
              content={
                <>
                  <Btn type="primary" key="edit" ghost>
                    수정
                  </Btn>
                  <Btn onClick={() => delMute(q.delAnswers)} type="primary" key="delete" danger ghost>
                    삭제
                  </Btn>
                </>
              }
            >
              <span className='moreBtn'>
                <MoreIcon />
              </span>
            </Popover>
          </>
          {/* )} */}
        </atom.Flex>
      </S.Header>

      <S.Viewer>
        <MarkDownViewer content={data?.content} />
      </S.Viewer>
      {/*Reply ---------------------------*/}
      <S.ChildView>
        <div className="show-replybtn">
          <ReCommentIcon style={{ color: 'rgba(0, 0, 0, 0.6)' }} /> <span>{data.commentsCount} </span>
          <span onClick={() => setviewChild(!viewChild)}>
            <CommentRotate view={viewChild.toString()} />
          </span>
        </div>
				<atom.Flex>
        <atom.CreatedAt> {getDate(data?.createdAt)}</atom.CreatedAt>
				</atom.Flex>
      </S.ChildView>

      {viewChild && (
        <>
          {comments ? (
            comments.map((comment) => <ReplyCp key={comment.id} data={comment} />)
          ) : (
            <atom.NoData>등록된 댓글이 없습니다. 댓글을 등록할 수 있습니다.</atom.NoData>
          )}
        </>
      )}
      <S.CommentEditor>
        <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="200px" />
        {mdStr && (
          <SubmitBtn onClick={onSubmitComment} loading={addReply.isLoading}>
            등록
          </SubmitBtn>
        )}
      </S.CommentEditor>
    </S.CommentWrapper>
  );
};

export default AnswerCp;
type Rotate = {view:string}
const CommentRotate = styled(ArrowIcon)<Rotate>`
  cursor: pointer;
  margin-top: 7px;
  color: rgba(0, 0, 0, 0.6);
  transition: all 0.3s;
  transform: ${({ view }) => (view=="true" ? 'rotate(90deg)' : null)};
`;

const Btn = styled(Button)`
  display: block;
  width: 55px;
`;
