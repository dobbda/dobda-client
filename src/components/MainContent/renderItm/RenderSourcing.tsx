import React, { useEffect, useState } from 'react';
import { keys, useInfinity } from 'src/hooks';
import { useInView } from 'react-intersection-observer';
import OCard from '../../Card/OCard';
import styled from 'styled-components';
import { o } from 'src/api';
import { InfinityProps, Outsource } from 'src/interface';
import { theme } from 'src/styles/Theme';
import { Skeleton } from 'src/components/Skeleton';
import { useRouter } from 'next/router';
import { NoData } from 'src/components/common/@share/Empty';

function RenderSourcing() {
  const router = useRouter();
  const { keyword } = router.query as { keyword: string };
  const { data, nextPage, refetch, isLoading, isSuccess } = useInfinity<Outsource>({
    fetch: (page: number, _?: string) => o.getInfinity(page, keyword?.toLocaleLowerCase()),
    queryKey: keys.sourcings(keyword?.toLocaleLowerCase()),
  });

  const [ref, isView] = useInView();
  useEffect(() => {
    // 무한 스크롤
    if (!data) refetch();
    if (isView && !data.isLast) nextPage();
  }, [isView, data, nextPage, , refetch]);
  return (
    <>
      {keyword && isSuccess && data.result.length == 0 && (
        <>
          <NoData>
            <h1>
              <strong>"{keyword}"</strong>에 대한 검색결과가 없습니다.
            </h1>
          </NoData>
        </>
      )}
      {isLoading ? (
        <Skeleton row={4} border title len={2} image />
      ) : (
        <ContentCardList>
          {data?.result.map((v, i) => {
            if (data.result.length == i) {
              return (
                <RefCard ref={ref} key={v.id}>
                  <OCard data={v} />
                </RefCard>
              );
            }
            return (
              <RefCard key={v.id}>
                <OCard data={v} />
              </RefCard>
            );
          })}
        </ContentCardList>
      )}
    </>
  );
}

export default RenderSourcing;

const ContentCardList = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  place-items: center;
  overflow: hidden;
  gap: 15px;
  @media screen and (max-width: ${theme.media.small}) {
    transition: all 0.2s;
    grid-template-columns: repeat(1, 2fr);
  }
`;
const RefCard = styled.div`
  width: 100%;
  /* :hover {
    margin-left: -1px;
    margin-right: -1px;
    box-shadow: 0 0 0 1px ${theme.color.prRgb(0.5)};
    transition: all 0.2s;
  } */
`;
