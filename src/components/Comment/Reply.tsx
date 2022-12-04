import React from 'react';
import getDate from 'src/lib/utils/dateForm';
import { ReplyItem, Header, CommentContent } from './style/Reply.style';
import { atom, Avatar } from 'src/components/common';
import { HtmlViewer } from 'src/components/Editor';
import { Comment, Reply } from 'src/interface';
import { Replyi } from 'src/icons';

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
            <Replyi />
          </i>
          <Avatar nickname={reply.author.nickname} url={reply.author.avatar} id={reply.author.id} />
          <atom.CreatedAt>{getDate(reply?.createdAt, true)}</atom.CreatedAt>
        </div>
      </Header>

      <CommentContent>
        <HtmlViewer content={reply.content} />
      </CommentContent>
    </ReplyItem>
  );
};

export default ReplyCp;
