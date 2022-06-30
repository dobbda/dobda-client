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
import { QComment, RComment } from './Comment/';
import getDate from 'src/lib/dateForm';

import Coin from 'src/assets/icon/coin.svg';
import Question_icon from "src/assets/icon/question.svg"
import {Button} from 'antd'
import styled from 'styled-components'

type Props = {
  children?: React.ReactElement; // commentComponent
};

const Buttons = styled(Button)`
  .ant-btn{
    background-color: gray;

  }
`

const QDetail = ({ children }: Props) => {
  return (
    <PostContainer>
      <ContentWrapper>
        <ContentHeader>
          <Question_icon/><h1 className="content-title"> apple system, BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu, Canta</h1>
          <TagWrapper> {/* map tags*/}
            <Tag bg={true}>python</Tag> <Tag bg={true}>java</Tag>
            <Tag bg={true}>java</Tag>
            <Tag bg={true}>java</Tag> <Tag bg={true}>matlab</Tag>
            <Buttons>안녕</Buttons>
          </TagWrapper>
          
<br/>
          <CoinWrapper>
            <p>9999</p>
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
