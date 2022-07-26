import React, { useState } from 'react';

import { Tag, Avatar } from '../common';
import getDate from 'src/lib/dateForm';
import * as S from './style/Detail.Element';
import Coin_icon from 'src/assets/icon/coin.svg';
import { Editor, MarkDownViewer } from 'src/components/Editor';
import { RComment } from './Comment/';

type Props = {
  children?: React.ReactElement; // commentComponent
};

const RDetail = ({ children }: Props) => {
  const [mdStr, setMdStr] = useState('');

  return (
    <>
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
            <Avatar nickname="Robot" url="https://joeschmoe.io/api/v1/aa" acceped_answer={false} />
            <div className="createdAt"> {getDate('2001-09-28 03:00:00')}</div>
          </div>
        </S.ContentHeader>

          <S.ContentViewWrapper>
            <MarkDownViewer content="# content viewer 입니다" />
          </S.ContentViewWrapper>
      </S.ContentWrapper>

      <S.EditorWrapper>
        <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="400px" />
      </S.EditorWrapper>
      <S.CommentList>
        <RComment acceped_answer={true} />
        <RComment />
        <RComment />
        <RComment />
      </S.CommentList>
    </>
  );
};

export default RDetail;
