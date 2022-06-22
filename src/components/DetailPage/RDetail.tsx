import React from 'react';

import { Tag, Avatar } from '../common';
import getDate from 'src/lib/dateForm';
import {
  PostContainer,
  ContentWrapper,
  ContentHeader,
  CommentContainer,
  CoinWrapper,
  TagWrapper,
  ContentView,
} from './style/Detail.Element';
import Coin_icon from 'src/assets/icon/coin.svg';
import Request_icon from 'src/assets/icon/request.svg';

import { RComment } from './Comment/';

type Props = {
  children?: React.ReactElement; // commentComponent
};

const RDetail = ({ children }: Props) => {
  return (
    <PostContainer>
      <ContentWrapper>
        <ContentHeader>
          <h1 className="content-title">apple system, BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu, Canta</h1>
          <TagWrapper>
            {' '}
            <Tag bg={true}>python</Tag> <Tag bg={true}>java</Tag>
            <Tag bg={true}>java</Tag>
            <Tag bg={true}>java</Tag> <Tag bg={true}>matlab</Tag>
          </TagWrapper>{' '}
          {/* map tags*/}
          <br />
          <div>
            <span className="deadline">마감기한: {getDate('2022-12-12/12:24')} </span>
            <CoinWrapper>
              <p>9999</p>
              <Coin_icon />
            </CoinWrapper>
          </div>
          <div className="created-user">
            <Avatar nickname="Robot" url="https://i.pravatar.cc/25" acceped_answer={false} />
            <div className="createdAt"> {getDate('2001-09-28 03:00:00')}</div>
          </div>
        </ContentHeader>

        <ContentView>
          <h3>markdown viewer components</h3>
        </ContentView>
      </ContentWrapper>

      <input type="text" placeholder="임시 input form" className="comment-form" />

      <CommentContainer>
        <RComment acceped_answer={true} />
        <RComment />
        <RComment />
        <RComment />
      </CommentContainer>
    </PostContainer>
  );
};

export default RDetail;
