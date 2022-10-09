import React from 'react';
import 'moment/locale/ko';
import getDate from 'src/lib/utils/dateForm';
import { ReplyItem, Header, CommentContent } from './style/Reply.style';
import { atom, Avatar } from 'src/components/common';
import { i } from 'src/icons';
import { MarkDownViewer } from 'src/components/Editor';
import { Comment, Reply } from 'src/types';

type Props = {
  reply: Reply;
};

const ReplyCp = ({ reply }: Props) => {
  return (
    <ReplyItem className="comment reply-items">
      <Header className="header">
        <div className="rc-left">
          <i className="reply">
            {' '}
            <i.Reply />
          </i>
          <Avatar nickname={reply.author.nickname} url={reply.author.avatar} id={reply.author.id} />
          <atom.CreatedAt>{getDate(reply?.createdAt, true)}</atom.CreatedAt>
        </div>
      </Header>

      <CommentContent>
        <MarkDownViewer content={reply.content} />
      </CommentContent>
    </ReplyItem>
  );
};

export default ReplyCp;
