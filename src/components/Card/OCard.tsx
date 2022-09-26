import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style/O.style';
import * as Lib from 'src/components/common';
import getDate from 'src/lib/dateForm';
import { atom } from '../common';
import * as I from 'src/assets/icons';
import { Outsource } from 'src/types';
import { TagWrapper } from '../common/@share/atom';
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
              <S.Group>
                <I.WatchIcon style={{ color: '#707070', fontSize: '17px', marginRight: '5px' }} /> <S.P>{data?.watch}</S.P>
              </S.Group>
            </S.Watch>
            <S.Image src={data.cardImage} alt="" />
            <S.Info>
              <TagWrapper>
                <S.P>필요 메이커스킬:</S.P>
                {data.tagNames?.map((tag, i) => (
                  <Lib.Tag key={data.id + i}>{tag.name}</Lib.Tag>
                ))}
              </TagWrapper>
              <S.Group>
                <S.P>마감일자 : {data?.deadline}</S.P> <S.Gap>|</S.Gap>
                <S.P>금액:{data.coin}</S.P>
              </S.Group>
            </S.Info>

            <S.Content>
              <S.HeaderWrapper>
                <S.Group>
                  <S.Progress>[ 매치중... ]</S.Progress>
                </S.Group>
                <S.Group>
                  <p>작성 : </p> <atom.CreatedAt className="createdAt">{getDate(data.createdAt, true)}</atom.CreatedAt>
                  <I.BookmarkIcon />
                </S.Group>
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
