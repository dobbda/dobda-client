import React, { useCallback, useState, useEffect } from 'react';

import { Editor, MarkDownViewer } from 'src/components/Editor';
import { atom, Avatar } from 'src/components/common';
import getDate from 'src/lib/dateForm';

import * as S from './style/style';
import * as i from 'src/assets/icons';
import { SubmitBtn } from '../style/Detail.style';
import { Enquiry } from 'src/types';
import styled from 'styled-components';
import { Button, Popover, message as m } from 'antd';
import { keys, useAddReply, useDelete, useDidMountEffect, useErrMsg } from 'src/hooks';
import { o } from 'src/api';
import { useQuery } from 'react-query';
import ReplyCp from './Reply';
type Props = {
  acceped_answer?: boolean;
  enquiry: Enquiry;
  isLoading?: boolean;
};

const EnquiryCp = ({ enquiry }: Props) => {
  const errMsg = useErrMsg();
  const [mdStr, setMdStr] = useState('');
  const [viewChild, setviewChild] = useState<boolean>(false);

  const del = useDelete(enquiry?.id, keys.enquiries(enquiry?.outSourcingId));
  const addReply = useAddReply(enquiry?.id);

  const { data: reply } = useQuery([keys.replies(enquiry?.id), enquiry?.id], () => o.getReplies(enquiry?.id), {
    enabled: enquiry?.repliesCount > 0 && viewChild,
  });

  const onSubmitComment = useCallback(() => {
    addReply.mutate({ content: mdStr, eid: enquiry.id });
  }, [addReply, mdStr, enquiry?.id]);

  useDidMountEffect(() => {
    if (addReply.isSuccess) {
      setMdStr('');
    }
    if (addReply.isError) {
      m.error(errMsg);
    }
    if (del.isError) {
      m.error(errMsg);
    }
  }, [addReply.isError, addReply.isSuccess, del.error?.response, del.isError, errMsg]);

  return (
    <S.CommentWrapper>
      {enquiry ? (
        <>
          <S.Header className="header">
            <Avatar nickname={enquiry?.author.nickname} url={enquiry?.author.avatar} id={enquiry?.author.id} />
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
            <MarkDownViewer content={enquiry?.content} />
          </S.Viewer>
          {/*Reply ---------------------------*/}
          <S.ChildView>
            <div className="show-replybtn">
              <i.ReCommentIcon style={{ color: 'rgba(0, 0, 0, 0.6)' }} /> <span>{enquiry.repliesCount} </span>
              <span onClick={() => setviewChild(!viewChild)}>
                <CommentRotate view={viewChild.toString()} />
              </span>
            </div>
            <atom.Flex>
              <atom.CreatedAt> {getDate(enquiry?.createdAt)}</atom.CreatedAt>
            </atom.Flex>
          </S.ChildView>

          {viewChild && (
            <>
              {reply ? (
                reply.map((r) => <ReplyCp key={r.id} reply={r} />)
              ) : (
                <atom.NoData>등록된 댓글이 없습니다. 댓글을 등록할 수 있습니다.</atom.NoData>
              )}
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
