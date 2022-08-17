import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';

import Reply from './Comment';
import { Editor, MarkDownViewer } from 'src/components/Editor';
import { Avatar, atom } from 'src/components/common';
import getDate from 'src/lib/dateForm';
import { EditAnswer } from './EditAnswer';
import * as S from './style/style';
import { ArrowIcon, MoreIcon, ReCommentIcon } from 'src/assets/icons';
import { SubmitBtn } from '../style/Detail.Element';
import { Answer } from 'src/types';
import { useQuery } from 'react-query';
import { q } from 'src/api';
import { keys, useAddCommentMutate, useDelete } from 'src/hooks';
import { Button, Popover } from 'antd';
type Props = {
  data: Answer;
};

const QComment = ({ data }: Props) => {
  const [isEdit, setisEdit] = useState(false);
  const [mdStr, setMdStr] = useState('');
  const [viewChild, setviewChild] = useState<boolean>(false);
  const { data: comments } = useQuery(keys.comment(data.id), () => q.getComments(data.id), {
    enabled: data.commentsCount > 0 && viewChild,
  });

  const { mutate, isLoading, isSuccess } = useAddCommentMutate(data?.id);
  const { mutate: delMute } = useDelete(data?.id, keys.answers(data?.questionId));

  const onSubmitComment = useCallback(() => {
    mutate({ content: mdStr, answerId: data.id });
  }, [mdStr, data.id, mutate]);

  useEffect(() => {
    if (isSuccess) {setMdStr('')}
  }, [isSuccess]);

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
            <CommentRotate viewchild={viewChild.toString()} />
          </span>
        </div>
				<atom.Flex>
        <atom.CreatedAt> {getDate(data?.createdAt)}</atom.CreatedAt>
				</atom.Flex>
      </S.ChildView>

      {viewChild && (
        <>
          {comments ? (
            comments.map((comment) => <Reply key={comment.id} data={comment} />)
          ) : (
            <atom.NoData>등록된 댓글이 없습니다. 댓글을 등록할 수 있습니다.</atom.NoData>
          )}
        </>
      )}
      <S.CommentEditor>
        <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="200px" />
        {mdStr && (
          <SubmitBtn onClick={onSubmitComment} loading={isLoading}>
            등록
          </SubmitBtn>
        )}
      </S.CommentEditor>
    </S.CommentWrapper>
  );
};

export default QComment;

const CommentRotate = styled(ArrowIcon)<{ viewchild: string }>`
  cursor: pointer;
  margin-top: 7px;
  color: rgba(0, 0, 0, 0.6);
  transition: all 0.3s;
  transform: ${({ viewchild }) => (viewchild ? 'rotate(90deg)' : null)};
`;

const Btn = styled(Button)`
  display: block;
  width: 55px;
`;
