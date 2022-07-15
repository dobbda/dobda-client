import React, { useState } from 'react';

import { Tag } from '../common';
import * as S from './style/Detail.Element';
import {Avatar} from '../common';
import { QComment, RComment } from './Comment/';
import getDate from 'src/lib/dateForm';

import Coin from 'src/assets/icon/coin.svg';
import Question_icon from "src/assets/icon/question.svg"
import {Button} from 'antd'
import styled from 'styled-components'
import {Editor} from 'src/components/Editor'


type Props = {
  children?: React.ReactElement; // commentComponent
};

const Buttons = styled(Button)`
  .ant-btn{
    background-color: gray;

  }
`

const QDetail = ({ children }: Props) => {
  const [mdStr, setMdStr] = useState("")
  return (
    <S.PostContainer>
      <S.ContentWrapper>
        <S.ContentHeader>
          <Question_icon/><h1 className="content-title"> apple system, BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu, Canta</h1>
          <S.TagWrapper> {/* map tags*/}
            <Tag bg={true}>python</Tag> <Tag bg={true}>java</Tag>
            <Tag bg={true}>java</Tag>
            <Tag bg={true}>java</Tag> <Tag bg={true}>matlab</Tag>
            <Buttons>안녕</Buttons>
          </S.TagWrapper>
          
<br/>
          <S.CoinWrapper>
            <p>9999</p>
            <Coin />
          </S.CoinWrapper>

          <div className="created-user">
            <Avatar nickname="Robot" url="https://i.pravatar.cc/25" acceped_answer={false} />
            <div className="createdAt"> {getDate("2001-09-28 03:00:00")}</div>
          </div>
        </S.ContentHeader>

        <S.ContentView>
          <h3>markdown viewer components</h3>
        </S.ContentView>
      </S.ContentWrapper>
      <S.EditorWrapper> 
    <h2>답변을 작성해주세요</h2>

        <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="600px"/>
      </S.EditorWrapper>

      <S.CommentList>
        <QComment acceped_answer={true} />
        <QComment />
        <QComment />
        <QComment />
      </S.CommentList>
    </S.PostContainer>
  );
};

export default QDetail;
