import React, { useEffect, useState } from 'react';
import { keys, useInfinity } from 'src/hooks';
import { useInView } from 'react-intersection-observer';
import OCard from '../../Card/OCard';
import styled from 'styled-components';
import { o } from 'src/api';
import { InfinityProps, Outsource } from 'src/interface';
import { theme } from 'src/styles/Theme';
import { Skeleton } from 'src/components/Skeleton';

function RenderSourcing() {
  const [shearchTitle, setShearchTitle] = useState<string>();
  const [shearchTag, setShearchTag] = useState<string>();
  const { data, nextPage, refetch, isLoading } = useInfinity<Outsource>({
    fetch: o.getInfinity,
    queryKey: keys.sourcings(),
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
        <Skeleton row={4} border title len={3} image />
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
  margin-bottom: 10px;
  @media screen and (max-width: 512px) {
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
