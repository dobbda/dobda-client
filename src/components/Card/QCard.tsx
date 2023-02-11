import React from 'react';
import * as S from './style/Q.style';
import * as c from './style/common';
import * as Lib from 'src/components/common';

import { Question } from 'src/interface';
import getDate from 'src/lib/utils/dateForm';
import { atom } from '../common';
import { theme } from 'src/styles/Theme';
import { Coini, Watchi } from 'src/icons';

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
            <Lib.Avatar
              size={20}
              nickname={q.author?.nickname}
              url={q.author?.avatar}
              id={q.author?.id}
            />
            <c.Group>
              <atom.CreatedAt>{getDate(q.createdAt, true)}</atom.CreatedAt>
            </c.Group>
          </S.HeaderWrapper>
          {/* cotent */}
          <S.BodyWrapper>
            <Lib.Link href={`/questions/${q.id}`}>
              <c.Title>{q.title}</c.Title>
            </Lib.Link>
            <atom.TagWrapper>
              {q.tagNames?.map((tag, i) => (
                <Lib.Tag key={tag.name + i} color="purple" clickEvent>
                  {tag.name}
                </Lib.Tag>
              ))}
            </atom.TagWrapper>
          </S.BodyWrapper>
          {/* footer */}
          <S.FooterWrapper>
            <c.Group>
              <c.Group>
                <c.P>Answer</c.P>
                <c.P>( {q.answersCount} )</c.P>
              </c.Group>

              <c.Gap>|</c.Gap>

              <c.Group>
                <c.P>Comment</c.P>
                <c.P>( {q.answersCount * 2} )</c.P>
              </c.Group>

              <c.Gap>|</c.Gap>

              <c.Group>
                <Coini css={{ marginRight: '5px' }} />{' '}
                <c.P>{q?.coin?.toLocaleString()}</c.P>
              </c.Group>
            </c.Group>
            <c.Group>
              <Watchi
                style={{
                  color: '#888888',
                  fontSize: '17px',
                  marginRight: '5px',
                }}
              />{' '}
              {q.watch}
            </c.Group>
          </S.FooterWrapper>
        </S.ContentWrapper>
      ) : (
        <>loading . . .</>
      )}
    </>
  );
};

export default QCard;
