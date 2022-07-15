import React,{useState} from 'react';

import { Tag, Avatar } from '../common';
import getDate from 'src/lib/dateForm';
import * as S from './style/Detail.Element';
import Coin_icon from 'src/assets/icon/coin.svg';
import {Editor} from 'src/components/Editor'
import { RComment } from './Comment/';

type Props = {
  children?: React.ReactElement; // commentComponent
};

const RDetail = ({ children }: Props) => {
  const [mdStr, setMdStr] = useState("")

  return (
    <S.PostContainer>
      <S.ContentWrapper>
        <S.ContentHeader>
          <h1 className="content-title">apple system, BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu, Canta</h1>
          <S.TagWrapper>
            {' '}
            <Tag bg={true}>python</Tag> <Tag bg={true}>java</Tag>
            <Tag bg={true}>java</Tag>
            <Tag bg={true}>java</Tag> <Tag bg={true}>matlab</Tag>
          </S.TagWrapper>{' '}
          {/* map tags*/}
          <br />
          <div>
            <span className="deadline">마감기한: {getDate('2022-12-12/12:24')} </span>
            <S.CoinWrapper>
              <p>9999</p>
              <Coin_icon />
            </S.CoinWrapper>
          </div>
          <div className="created-user">
            <Avatar nickname="Robot" url="https://i.pravatar.cc/25" acceped_answer={false} />
            <div className="createdAt"> {getDate('2001-09-28 03:00:00')}</div>
          </div>
        </S.ContentHeader>

        <S.ContentView>
          <h3>markdown viewer components</h3>
        </S.ContentView>
      </S.ContentWrapper>

      <S.EditorWrapper> 
        <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="600px"/>
      </S.EditorWrapper>

      <S.CommentContainer>
        <RComment acceped_answer={true} />
        <RComment />
        <RComment />
        <RComment />
      </S.CommentContainer>
    </S.PostContainer>
  );
};

export default RDetail;
