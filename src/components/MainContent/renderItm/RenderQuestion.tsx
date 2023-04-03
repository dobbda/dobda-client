import React, { useEffect, useState } from 'react';
import { keys, useInfinity } from 'src/hooks';
import { useInView } from 'react-intersection-observer';
import QCard from '../../Card/QCard';
import styled from 'styled-components';
import { q } from 'src/api';
import { Question } from 'src/interface';
import { theme } from 'src/styles/Theme';
import { Skeleton } from 'src/components/Skeleton';
import { useRouter } from 'next/router';
import { NoData } from 'src/components/common/@share/Empty';
function RenderQuestion() {
  const router = useRouter();
  const { keyword } = router.query as { keyword: string };
  const { data, nextPage, refetch, isLoading } = useInfinity<Question>({
    fetch: (page, _?: string) => q.getInfinity(page, keyword?.toLocaleLowerCase()),
    queryKey: keys.questions(keyword?.toLocaleLowerCase()),
  });

  const [ref, isView] = useInView();
  useEffect(() => {
    // 무한 스크롤
    if (!data) refetch();
    if (isView && !data?.isLast) nextPage();
  }, [isView, data, nextPage, , refetch]);

  return (
    <>
      {keyword && data?.result.length == 0 && (
        <>
          <NoData>
            <h1>
              <strong>"{keyword}"</strong>에 대한 검색결과가 없습니다.
            </h1>
          </NoData>
        </>
      )}
      {isLoading ? (
        <Skeleton row={3} title border avatar len={1} />
      ) : (
        <ContentCardList>
          {data?.result.map((v, i) => {
            if (data.result.length == i + 1) {
              return (
                <RefCard ref={ref} key={v.id}>
                  <QCard data={v} />
                </RefCard>
              );
            }
            return (
              <RefCard key={v.id}>
                <QCard data={v} />
              </RefCard>
            );
          })}
        </ContentCardList>
      )}
    </>
  );
}

export default RenderQuestion;

const ContentCardList = styled.div`
  display: grid;
  place-items: center;
  overflow: hidden;
  transition: all 0.2s;
  padding: 10px;
	padding-bottom:0;
  /* gap: 20px; */
`;
const RefCard = styled.div`
  width: 100%;
  /* box-shadow: 0 0 0 1px #e3e6e8; */
  padding: 10px 15px;
  /* border-radius: 7px; */
  border-bottom: solid 1px #e1e1e1;
  :hover {
    margin-left: -1px;
    margin-right: -1px;
    box-shadow: 0 0 0 1px ${theme.color.prRgb(0.5)};
    transition: all 0.2s;
  }
`;
