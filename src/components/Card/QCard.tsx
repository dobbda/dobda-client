import React from 'react';
import * as S from './style/Q.style';
import * as Lib from 'src/components/common';
import * as I from 'src/assets/icons';

import { Question } from 'src/types';
import getDate from 'src/lib/dateForm';
import { atom } from '../common';

type data = {
  data: Question;
};

const QCard = ({ data }: data) => {
  const q = data && data;
  return (
    <>
      {q ? (
        <S.ContentWrapper className="card-items">
          <S.HeaderWrapper>
            <Lib.Avatar nickname={q.author?.nickname} url={q.author?.avatar} />
            {/* <Group ><Qicon /><P >{q.author?.nickname}</P></Group> */}
            <S.Group>
              <atom.CreatedAt>{getDate(q.createdAt, true)}</atom.CreatedAt>
            </S.Group>
          </S.HeaderWrapper>
          <div className="diff-styles">
            {/* cotent */}
            <S.BodyWrapper>
              <Lib.Link href={`/questions/detail?createdAt=${q.createdAt}&qid=${q.id}`}>
                <S.Title>{q.title}</S.Title>
              </Lib.Link>
              <atom.TagWrapper>
                {q.tagNames?.map((tag, i) => (
                  <Lib.Tag key={tag.name + i}>
                    {tag.name}
                  </Lib.Tag>
                ))}
              </atom.TagWrapper>
            </S.BodyWrapper>
            {/* footer */}
            <S.FooterWrapper>
              <S.Group>
                <S.Group>
                  <p>Answer</p>
                  <p>( {q.answersCount} )</p>
                </S.Group>

                <S.Gap>|</S.Gap>

                <S.Group>
                  <p>Comment</p>
                  <p>( {q.watch} )</p>
                </S.Group>

                <S.Gap>|</S.Gap>

                <S.Group>
                  <I.CoinIcon css={{ marginRight: '5px' }} /> <p color="#8400EC">{q.coin}</p>
                </S.Group>
              </S.Group>
              <S.Group>
                <I.WatchIcon style={{ color: '#707070', fontSize: '20px', marginRight: '5px' }} />( {q.watch} )
              </S.Group>
            </S.FooterWrapper>
          </div>
        </S.ContentWrapper>
      ) : (
        <>loading . . .</>
      )}
    </>
  );
};

export default QCard;
