import React from 'react';
import { ContentWrapper, Group, HeaderWrapper, BodyWrapper, Title, FooterWrapper  } from './style/Q.style';
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
        <ContentWrapper className="card-items">
          <HeaderWrapper>
            <Lib.Avatar nickname={q.author?.nickname} url={q.author?.avatar} />
            {/* <Group ><Qicon /><P >{q.author?.nickname}</P></Group> */}
            <Group>
              <atom.CreatedAt>{getDate(q.createdAt,true)}</atom.CreatedAt>
            </Group>
          </HeaderWrapper>
          <div className="diff-styles">
            {/* cotent */}
            <BodyWrapper>
              <Lib.Link href={`/questions/detail?createdAt=${q.createdAt}&qid=${encodeURIComponent(q.id)}`}>
                <Title>{q.title}</Title>
              </Lib.Link>
              <atom.TagWrapper>
                {q.tagNames?.map((tag, i) => (
                  <Lib.Tag bg={true} key={tag.name + i}>
                    {tag.name}
                  </Lib.Tag>
                ))}
              </atom.TagWrapper>
            </BodyWrapper>
            {/* footer */}
            <FooterWrapper>
              <Group>
                <Group>
                  <p>Answer</p>
                  <p>( {q.answersCount} )</p>
                </Group>
                {' | '}
                <Group>
                  <p> Clicked </p>
                  <p> ( {q.watch} )</p>
                </Group>
                {' | '}
                <Group>
                  <p> Comment </p>
                  <p> ( {q.watch} )</p>
                </Group>
              </Group>
              <Group>
                <p color="#8400EC">{q.coin}</p>
                <I.CoinIcon />
              </Group>
            </FooterWrapper>
          </div>
        </ContentWrapper>
      ) : (
        <>loading . . .</>
      )}
    </>
  );
};

export default QCard;
