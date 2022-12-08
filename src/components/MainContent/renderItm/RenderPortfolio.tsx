import React, { useEffect, useState } from 'react';
import { keys, useInfinity } from 'src/hooks';
import { useInView } from 'react-intersection-observer';
import QCard from '../../Card/QCard';
import styled from 'styled-components';

import { Portfolio, Question } from 'src/interface';
import { theme } from 'src/styles/Theme';
import { Skeleton } from 'src/components/Skeleton';
import { PortfolioCard } from 'src/components/Users/portfolio/public/Card';
import { getPfs } from 'src/api/apis/user';

function RenderPortfolio() {
  const { data, nextPage, refetch, isLoading } = useInfinity<Portfolio>({
    fetch: getPfs,
    queryKey: keys.pfs,
  });

  const [ref, isView] = useInView();
  useEffect(() => {
    // 무한 스크롤
    if (isView && !data.isLast) nextPage();
    if (!data) refetch();
  }, [isView, data, nextPage, , refetch]);

  return (
    <>
      {isLoading ? (
        <Skeleton row={3} image border avatar len={3} />
      ) : (
        <ContentCardList>
          {data?.result.map((v, i) => {
            if (data.result.length == i + 1) {
              return (
                <RefCard ref={ref} key={v.id}>
                  <PortfolioCard data={v} />
                </RefCard>
              );
            }
            return (
              <RefCard key={v.id}>
                <PortfolioCard data={v} />
              </RefCard>
            );
          })}
        </ContentCardList>
      )}
    </>
  );
}

export default RenderPortfolio;

const ContentCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  transition: all 0.2s;
  margin-bottom: 10px;
  padding: 10px;
  row-gap: 20px;
  column-gap: 10px;
  height: 100%;
  @media screen and (max-width: 512px) {
    transition: all 0.2s;
    grid-template-columns: repeat(2, 2fr);
  }
`;
const RefCard = styled.div`
  width: 100%;
`;
