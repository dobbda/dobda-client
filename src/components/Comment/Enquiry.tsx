import React, { useCallback, useState, useEffect } from 'react';

import { Editor, HtmlViewer } from 'src/components/Editor';
import { atom, Avatar, Empty } from 'src/components/common';
import getDate from 'src/lib/utils/dateForm';
import * as S from './style/style';
import { Enquiry, OutsourceDetail, Progress } from 'src/types';
import styled from 'styled-components';
import { Popover, message as m } from 'antd';
import { keys, useAddReply, useAuth, useDelete, useDidMountEffect, useErrMsg } from 'src/hooks';
import { o } from 'src/api';
import { QueryClient, useQuery, useQueryClient } from 'react-query';
import ReplyCp from './Reply';
import { useRouter } from 'next/router';
import { Button } from 'src/components/common';
import Edit from './Edit';
import { on } from 'events';
import { Skeleton } from '../Skeleton';
import { Morei, ReCommenti, Arrowi } from 'src/icons';
type Props = {
  out: OutsourceDetail;
  enquiry: Enquiry;
  isLoading?: boolean;
};

const EnquiryCp = ({ enquiry, out }: Props) => {
  const [showEdit, setShowEdit] = useState(false);
  const router = useRouter();
  const { id: oid } = router.query as { id: string };
  const { errMsg } = useErrMsg();
  const [html, setHtml] = useState('');
  const [viewChild, setviewChild] = useState<boolean>(false);
  const { auth } = useAuth();
  const del = useDelete(enquiry?.id, keys.enquiry(enquiry?.outSourcingId));
  const addReply = useAddReply(enquiry?.id);
  const queryClient = useQueryClient();
  const { data: reply, isLoading: replyLoading } = useQuery(keys.reply(Number(oid), enquiry?.id), () => o.getReply(enquiry?.id), {
    enabled: enquiry?.repliesCount > 0 && viewChild,
  });

  const onSubmitComment = useCallback(() => {
    addReply.mutate({ content: html, eid: enquiry.id });
  }, [addReply, html, enquiry?.id]);

  useDidMountEffect(() => {
    if (addReply.isSuccess) {
      setHtml('');
    }
    if (addReply.isError) {
      m.error(errMsg);
    }
    if (del.isError) {
      m.error(errMsg);
    }
  }, [addReply.isError, addReply.isSuccess, del.error?.response, del.isError, errMsg]);
  const showAcceptButton = auth?.id === out?.authorId && out.progress == 'Pending' && enquiry?.authorId !== auth.id;
  const removeHandler = useCallback(() => {
    if (confirm('삭제시 복구가 불가능 합니다')) {
      del.mutate(o.delEnquiry);
    }
  }, [del]);

  const picked = useCallback(async () => {
    if (await o.pick(oid, enquiry.id)) {
      queryClient.invalidateQueries(keys.oDetail(enquiry.outSourcingId));
    }
  }, []);
  return (
    <S.CommentWrapper>
      {enquiry ? (
        <>
          <S.Header className="header">
            <Avatar nickname={enquiry?.author.nickname} url={enquiry?.author.avatar} id={enquiry?.author.id} />
            <atom.Flex>
              {showAcceptButton && (
                <Button types="primary" onClick={picked} css={{ height: '25px' }}>
                  선택
                </Button>
              )}
              <>
                <Popover
                  trigger="click"
                  placement="bottom"
                  content={
                    auth?.id === enquiry?.author.id ? (
                      <>
                        <Button types="primary" key="_edit" onClick={() => setShowEdit(true)} $block>
                          수정
                        </Button>
                        <Button types="danger" onClick={removeHandler} key="_delete" $block>
                          삭제
                        </Button>
                      </>
                    ) : (
                      <Button types="danger" onClick={() => {}} key="_delete" $block>
                        신고
                      </Button>
                    )
                  }
                >
                  <span className="moreBtn">
                    <Morei />
                  </span>
                </Popover>
              </>
              {/* )} */}
            </atom.Flex>
          </S.Header>

          <S.Viewer>
            {showEdit ? (
              <Edit id={enquiry?.id} setCancel={setShowEdit} content={enquiry.content} type="enquiry" />
            ) : (
              <HtmlViewer content={enquiry?.content} />
            )}
          </S.Viewer>
          {/*Reply ---------------------------*/}
          <S.ChildView>
            <div className="show-replybtn">
              <ReCommenti style={{ color: 'rgba(0, 0, 0, 0.6)' }} /> <span>{enquiry.repliesCount} </span>
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
              {enquiry.repliesCount > 0 ? (
                replyLoading ? (
                  <Skeleton avatar title len={enquiry.repliesCount} />
                ) : (
                  reply.map((r) => <ReplyCp key={r.id} reply={r} />)
                )
              ) : (
                <Empty />
              )}
            </>
          )}
          <S.CommentEditor>
            <Editor
              html={html}
              setHtml={setHtml}
              onClickShow={true}
              height="200px"
              submitBtn={
                <>
                  <Button types="primary" $block onClick={onSubmitComment} css={{ width: '100px' }}>
                    등록
                  </Button>
                </>
              }
            />
          </S.CommentEditor>
        </>
      ) : null}
    </S.CommentWrapper>
  );
};

export default EnquiryCp;

const CommentRotate = styled(Arrowi)<{ view: string }>`
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
