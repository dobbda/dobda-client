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
import { useRouter } from 'next/router';
import { NoData } from 'src/components/common/@share/Empty';

function RenderPortfolio() {
  const router = useRouter();
  const { keyword } = router.query as { keyword: string };
  const { data, nextPage, refetch, isLoading, isSuccess } = useInfinity<Portfolio>({
    fetch: (page: number, _?: string) => getPfs(page, keyword?.toLocaleLowerCase()),
    queryKey: keys.pfs(keyword?.toLocaleLowerCase()),
  });

  const [ref, isView] = useInView();
  useEffect(() => {
    console.log('us', data);
    // 무한 스크롤
    if (!data) refetch();
    if (data && isView && !data.isLast) nextPage();
  }, [isView, data, data?.isLast, nextPage, , refetch]);

  return (
    <>
      {isSuccess && keyword && data.result.length == 0 && (
        <>
          <NoData>
            <h1>
              <strong>"{keyword}"</strong>
              키워드를 가진 메이커를 찾지 못했어요!.
            </h1>
          </NoData>
        </>
      )}
      {isLoading ? (
        <Skeleton row={3} image border len={1} />
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
