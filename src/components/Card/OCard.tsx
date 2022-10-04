import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style/O.style';
import * as c from './style/common';
import * as Lib from 'src/components/common';
import getDate from 'src/lib/utils/dateForm';
import { atom } from '../common';
import { i } from 'src/icons';
import { Outsource } from 'src/types';
import { TagWrapper } from '../common/@share/atom';
import { theme } from 'src/styles/Theme';
import Link from 'next/link';
type Props = {
  data?: Outsource;
};

const OCard = ({ data }: Props) => {
  const ms = +new Date(data.deadline) - +new Date();
  const CountDown = Math.ceil(ms / (1000 * 60 * 60 * 24));
  return (
    <>
      {data && data ? (
        <S.ContentWrapper>
          <Lib.Link href={`/custom-project/requests/${data.id}`} scroll={false}>
            <S.Watch>
              <c.Group>
                <i.Watch style={{ color: '#707070', fontSize: '17px', marginRight: '5px' }} /> <c.P>{data?.watch}</c.P>
              </c.Group>
            </S.Watch>
            <S.Countdown>
              <p css={{ color: 'red', fontSize: '13px', fontWeight: 'bold', fontFamily: 'Nanum ' }}>
                {CountDown <= 0 ? '마감' : 'D' + ' - ' + CountDown}
              </p>
            </S.Countdown>
            <S.Image src={data.cardImage} alt="" />
            <S.Info>
              <TagWrapper>
                <c.P>필요 메이커스킬:</c.P>
                {data.tagNames?.map((tag, i) => (
                  <Lib.Tag key={data.id + i}>{tag.name}</Lib.Tag>
                ))}
              </TagWrapper>
              <c.Group>
                <c.P>마감일자 : {data?.deadline}</c.P> <c.Gap>|</c.Gap>
                <c.P>금액:</c.P>
                <c.P>
                  {data?.coin.toLocaleString()}
                  <i.Won css={{ marginLeft: '3px' }} />
                </c.P>
              </c.Group>
            </S.Info>

            <S.Content>
              <S.HeaderWrapper>
                <c.Group>
                  <S.Progress>[ 매치중... ]</S.Progress>
                </c.Group>
                <c.Group>
                  <p>작성 : </p> <atom.CreatedAt className="createdAt">{getDate(data.createdAt, true)}</atom.CreatedAt>
                  <i.Bookmark />
                </c.Group>
              </S.HeaderWrapper>
              <S.Title className="outsourcing-title">{data.title}</S.Title>
            </S.Content>
          </Lib.Link>
        </S.ContentWrapper>
      ) : null}
    </>
  );
};

export default OCard;
