import React from 'react';
import * as S from './style/R.style';
import * as Lib from 'src/components/common';
import getDate from 'src/lib/dateForm';
import { atom } from '../common';
import * as I from 'src/assets/icons';

type Props = {
  question?: number[];
};

const RCard = ({ question }: Props) => {
  const tagList = ['python', 'Java', 'JavaScript'];

  return (
    <S.ContentWrapper type="R">
      <S.HeaderWrapper>
        <S.Group>
					<S.Progress>[ 플리랜서 매치중 ]</S.Progress>
        </S.Group>
        <S.Group>
          <p>작성 :  </p> <atom.CreatedAt className="createdAt">{getDate('2021-10-09T00:44:52+09:00', true)}</atom.CreatedAt>
					<I.BookmarkIcon />
        </S.Group>
      </S.HeaderWrapper>
        <S.BodyWrapper>
            <Lib.Link href={`/outsource/${encodeURIComponent(10)}`} scroll={false}>
              <S.Title>
                battery cathodes. He earned a BS in Mechanical Engineeringbattery battery cathodes. He earned a ....
              </S.Title>
            </Lib.Link>
          <atom.TagWrapper>
            {tagList.map((tag, i) => (
              <Lib.Tag key={i} bg={true}>{tag}</Lib.Tag>
            ))}
          </atom.TagWrapper>
        </S.BodyWrapper>
        <S.FooterWrapper>
					<S.Group>
					<p>마감일자 : D-10</p> <S.Gap>|</S.Gap>
            <p>작업금액 : 100000</p>
					</S.Group>
						<S.Group>
						<I.WatchIcon style={{color: '#707070', fontSize:"20px", marginRight:"5px"}}/>
                 ( 100 )
						</S.Group>
        </S.FooterWrapper>
    </S.ContentWrapper>
  );
};

export default RCard;
