import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style/O.style';
import * as c from './style/common';
import * as Lib from 'src/components/common';
import getDate from 'src/lib/utils/dateForm';
import { atom } from '../common';
import { Outsource } from 'src/types';
import { TagWrapper } from '../common/@share/atom';
import { Bookmarki, Watchi, Woni } from 'src/icons';
type Props = {
  data?: Outsource;
};

const OCard = ({ data }: Props) => {
  const ms = +new Date(data.deadline) - +new Date();
  const CountDown = Math.ceil(ms / (1000 * 60 * 60 * 24));
  return (
    <>
      {data && data ? (
        <Lib.Link href={`/custom-project/requests/${data.id}`} scroll={false}>
          <S.ContentWrapper>
            <S.Watch>
              <c.Group>
                <Watchi style={{ color: '#707070', fontSize: '17px', marginRight: '5px' }} /> <c.P>{data?.watch}</c.P>
              </c.Group>
            </S.Watch>
            <S.Countdown>
              <p css={{ color: '#494949', fontSize: '13px', fontWeight: 'bold', fontFamily: 'Nanum ' }}>
                {CountDown <= 0 ? '마감' : 'D' + ' - ' + CountDown}
              </p>
            </S.Countdown>
            <S.Image src={data.cardImage} alt="" />
            <S.Content>
              <S.HeaderWrapper>
                <c.Group>
                  <S.Progress>[ 매치중... ]</S.Progress>
                </c.Group>
                <c.Group>
                  {/* <c.P>작성 : </c.P>{' '} */}
                  <atom.CreatedAt className="createdAt">
                    작성 :{getDate(data.createdAt, true)}
                    <c.Gap></c.Gap>{' '}
                  </atom.CreatedAt>
                  <Bookmarki />
                </c.Group>
              </S.HeaderWrapper>
              <c.Title className="outsourcing-title">{data.title}</c.Title>
            </S.Content>
            <S.Info>
              <TagWrapper>
                <c.P>need skills:</c.P>
                {data.tagNames?.map((tag, i) => (
                  <Lib.Tag key={data.id + i}>{tag.name}</Lib.Tag>
                ))}
              </TagWrapper>
              <c.Group>
                <c.P>마감일자 : {data?.deadline}</c.P> <c.Gap>|</c.Gap>
                <c.P>금액:</c.P>
                <c.P>
                  {data?.coin.toLocaleString()}
                  <Woni css={{ marginLeft: '3px' }} />
                </c.P>
              </c.Group>
            </S.Info>
          </S.ContentWrapper>
        </Lib.Link>
      ) : null}
    </>
  );
};

export default OCard;
