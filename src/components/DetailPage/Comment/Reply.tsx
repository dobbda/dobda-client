import React from 'react';
import 'moment/locale/ko';
import getDate from 'src/lib/dateForm';
import { ReplyItem, Header, CommentContent } from './style/Reply.style';
import { atom, Avatar } from 'src/components/common';
import { ReplyIcon } from 'src/assets/icons';
import { MarkDownViewer } from 'src/components/Editor';
import { Comment, Reply } from 'src/types';

type Props = {
  comment: Reply;
};

const ReplyCp = ({ comment }: Props) => {
  return (
    <ReplyItem className="comment reply-items">
      <Header className="header">
        <div className="rc-left">
          <i className="reply">
            {' '}
            <ReplyIcon />
          </i>
          <Avatar nickname={comment.author.nickname} url={comment.author.avatar} />
          <atom.CreatedAt>{getDate(comment?.createdAt, true)}</atom.CreatedAt>
        </div>
      </Header>

      <CommentContent>
        <MarkDownViewer content={comment.content} />
      </CommentContent>
    </ReplyItem>
  );
};

export default ReplyCp;
