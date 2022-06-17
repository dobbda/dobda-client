import React from 'react';

import { Tag } from '../common';
import {
  PostContainer,
  ContentWrapper,
  ContentHeader,
  CommentContainer,
  CoinWrapper,
  TagWrapper,
  ContentView,
} from './style/Detail.Element';
import {Avatar} from '../common';
import Coin from 'src/assets/icon/coin.svg';

import { QComment, RComment } from './Comment/';
import getDate from 'src/lib/dateForm';

type Props = {
  children?: React.ReactElement; // commentComponent
};

const QDetail = ({ children }: Props) => {
  return (
    <PostContainer>
      <ContentWrapper>
        <ContentHeader>
          <h1 className="content-title">apple system, BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu, Canta</h1>
          <TagWrapper>
            <Tag bg={true}>python</Tag> <Tag bg={true}>java</Tag>
            <Tag>java</Tag>
            <Tag>java</Tag> <Tag>matlab</Tag>
          </TagWrapper>{' '}
          {/* map tags*/}
          <div className="deadline" key={"comments"}>마감기한: {getDate("2001-09-28 03:00:00")} </div>
          <CoinWrapper>
            코인: <p>9999</p>
            <Coin />
          </CoinWrapper>
          <div className="created-user">
            <Avatar nickname="Robot" url="https://i.pravatar.cc/25" acceped_answer={false} />
            <div className="createdAt"> {getDate("2001-09-28 03:00:00")}</div>
          </div>
        </ContentHeader>

        <ContentView>
          <h3>markdown viewer components</h3>
        </ContentView>
      </ContentWrapper>

      <input type="text" placeholder="임시 input form" className="comment-form" />

      <CommentContainer>
        <QComment acceped_answer={true} />
        <QComment />
        <QComment />
        <QComment />
      </CommentContainer>
    </PostContainer>
  );
};

export default QDetail;
