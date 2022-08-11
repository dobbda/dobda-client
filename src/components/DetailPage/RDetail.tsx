import React, { useState } from 'react';

import { Tag } from '../common';
import * as S from './style/Detail.Element';
import { Avatar } from '../common';
import {RComment } from './Comment/';
import getDate from 'src/lib/dateForm';

import { CoinIcon } from 'src/assets/icons';
import Question_icon from 'src/assets/icon/question.svg';
import { Button } from 'antd';
import styled from 'styled-components';
import { Editor } from 'src/components/Editor';
import { MarkDownViewer, ReactMarkdownViewer } from 'src/components/Editor';
import { QuestionDetail } from 'src/types';

type Props = {
  children?: React.ReactElement; // commentComponent
	data?: QuestionDetail
};

const QDetail = ({ children, data }: Props) => {
  const [mdStr, setMdStr] = useState('');
  return (
    <>
      <S.ContentWrapper>
        <S.ContentHeader>
          {/* <S.CoinWrapper>
                <CoinIcon />
                <p>9999</p>
              </S.CoinWrapper> */}
          <div className="detailInfo">
            <div>
              <Avatar nickname="Robot" url="https://joeschmoe.io/api/v1/asdf" />
              <S.CoinWrapper>
                <CoinIcon />
                <p>9999</p>
              </S.CoinWrapper>
            </div>
            <S.CreatedAt>{getDate('2001-09-28 03:00:00')}</S.CreatedAt>
          </div>
          <Question_icon />
          <S.Title> apple system, BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu, Canta</S.Title>
          <S.TagWrapper>
            {' '}
            {/* map tags*/}
            <Tag bg={true}>python</Tag> <Tag bg={true}>java</Tag>
            <Tag bg={true}>java</Tag>
            <Tag bg={true}>java</Tag> <Tag bg={true}>matlab</Tag>
          </S.TagWrapper>
        </S.ContentHeader>

        <S.ContentViewWrapper>
          <MarkDownViewer content={mdStr} />
        </S.ContentViewWrapper>
      </S.ContentWrapper>
      <S.EditorWrapper>
        <h3>대화를 나눠보세요</h3>
        <br />
        <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="400px" />
        <br />
        <br />

        <S.SubmitBtn>등록</S.SubmitBtn>
      </S.EditorWrapper>

      <S.AnswerContainer>
        <RComment acceped_answer={true} />
        <RComment />
        <RComment />
        <RComment />
      </S.AnswerContainer>
    </>
  );
};

export default QDetail;
