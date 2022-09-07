import React, { useCallback, useState, useEffect } from 'react';

import Reply from './Reply';
import { Editor, MarkDownViewer } from 'src/components/Editor';
import { atom, Avatar } from 'src/components/common';
import getDate from 'src/lib/dateForm';

import * as S from './style/style';
import * as i from 'src/assets/icons';
import { SubmitBtn } from '../style/Detail.style';
import { Enquiry } from 'src/types';
import styled from 'styled-components';
import { Button, Popover } from 'antd';
import { keys, useAddReply, useDelete } from 'src/hooks';
import { o } from 'src/api';
import { toast } from 'react-toastify';
type Props = {
  acceped_answer?: boolean;
  data: Enquiry;
  isLoading?: boolean;
};

const EnquiryCp = ({ data }: Props) => {
  const [mdStr, setMdStr] = useState('');
  const [viewChild, setviewChild] = useState<boolean>(false);
  const del = useDelete(data?.id, keys.enquiries(data?.outSourcingId));

  const addReply = useAddReply(data?.id);
  const onSubmitComment = useCallback(() => {
    addReply.mutate({ content: mdStr, aid: data.id });
  }, [addReply, mdStr, data.id]);

  useEffect(() => {
    if (addReply.isSuccess) {
      setMdStr('');
    }
    if (addReply.isError) {
      console.log('에러');
    }
  }, [addReply.error?.response.data.message, addReply.isError, addReply.isSuccess]);

  return (
    <S.CommentWrapper>
      {data ? (
        <>
          <S.Header className="header">
            <Avatar nickname={data?.author.nickname} url={data?.author.avatar} />
            <atom.Flex>
              <Button>채택하기</Button>
              <>
                <Popover
                  trigger="click"
                  placement="bottom"
                  content={
                    <>
                      <Btn type="primary" key="enquiry-edit" ghost>
                        수정
                      </Btn>
                      <Btn onClick={() => del.mutate(o.delEnquiry)} key="enquiry-delete" danger ghost>
                        삭제
                      </Btn>
                    </>
                  }
                >
                  <span className="moreBtn">
                    <i.MoreIcon />
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
              <i.ReCommentIcon style={{ color: 'rgba(0, 0, 0, 0.6)' }} /> <span>{data.repliesCount} </span>
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
              {/* {comments ? (
            comments.map((comment) => <ReplyCp key={comment.id} data={comment} />)
          ) : (
            <atom.NoData>등록된 댓글이 없습니다. 댓글을 등록할 수 있습니다.</atom.NoData>
          )} */}
            </>
          )}
          <S.CommentEditor>
            <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="200px" />
            {mdStr && <SubmitBtn onClick={onSubmitComment}>등록</SubmitBtn>}
          </S.CommentEditor>
        </>
      ) : null}
    </S.CommentWrapper>
  );
};

export default EnquiryCp;

const CommentRotate = styled(i.ArrowIcon)<{ view: string }>`
  cursor: pointer;
  margin-top: 7px;
  color: rgba(0, 0, 0, 0.6);
  transition: all 0.3s;
  transform: ${({ view }) => (view == 'true' ? 'rotate(90deg)' : null)};
`;

const Btn = styled(Button)`
  display: block;
  width: 55px;
`;
