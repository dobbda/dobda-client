import React from 'react';
import * as S from './style/O.style';
import * as Lib from 'src/components/common';
import getDate from 'src/lib/dateForm';
import { atom } from '../common';
import * as I from 'src/assets/icons';
import { Outsource } from 'src/types';

type Props = {
  data?: Outsource;
};

const OCard = ({ data }: Props) => {
  return (
		<>
		{
			data&&data?
			<S.ContentWrapper type="R">
      <S.HeaderWrapper>
        <S.Group>
					<S.Progress>[ 매치중... ]</S.Progress>
        </S.Group>
        <S.Group>
          <p>작성 :  </p> <atom.CreatedAt className="createdAt">{getDate(data.createdAt, true)}</atom.CreatedAt>
					<I.BookmarkIcon />
        </S.Group>
      </S.HeaderWrapper>
        <S.BodyWrapper>
            <Lib.Link href={`/outsource/${data.id}`} scroll={false}>
              <S.Title>
                {data.title}
              </S.Title>
            </Lib.Link>
          <atom.TagWrapper>
            {data.tagNames?.map((tag, i) => (
              <Lib.Tag key={data.id+i} bg={true}>{tag.name}</Lib.Tag>
            ))}
          </atom.TagWrapper>
        </S.BodyWrapper>
        <S.FooterWrapper>
					<S.Group>
					<p>마감일자 : {data?.deadline}</p> <S.Gap>|</S.Gap>
            <p>작업금액 : {data.coin}</p>
					</S.Group>
						<S.Group>
						<I.WatchIcon style={{color: '#707070', fontSize:"20px", marginRight:"5px"}}/>
                 ( {data?.watch} )
						</S.Group>
        </S.FooterWrapper>
    </S.ContentWrapper>
		: null
		}
    
		</>
  );
};

export default OCard;
