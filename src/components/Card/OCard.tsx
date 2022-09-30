import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style/O.style';
import * as c from './style/common';
import * as Lib from 'src/components/common';
import getDate from 'src/lib/utils/dateForm';
import { atom } from '../common';
import * as I from 'src/icons';
import { Outsource } from 'src/types';
import { TagWrapper } from '../common/@share/atom';
import { theme } from 'src/styles/Theme';
type Props = {
  data?: Outsource;
};

const OCard = ({ data }: Props) => {
  return (
    <>
      {data && data ? (
        <Lib.Link href={`/custom-project/requests/${data.id}`} scroll={false}>
          <S.ContentWrapper>
            <S.Watch>
              <c.Group>
                <I.WatchIcon style={{ color: '#707070', fontSize: '17px', marginRight: '5px' }} /> <c.P>{data?.watch}</c.P>
              </c.Group>
            </S.Watch>
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
                  <I.Won css={{ marginLeft: '3px' }} />
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
                  <I.BookmarkIcon />
                </c.Group>
              </S.HeaderWrapper>
              <S.Title>{data.title}</S.Title>
            </S.Content>
          </S.ContentWrapper>
        </Lib.Link>
      ) : null}
    </>
  );
};

export default OCard;
