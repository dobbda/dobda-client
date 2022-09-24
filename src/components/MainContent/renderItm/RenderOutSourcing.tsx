import React, { useEffect, useState } from 'react';
import { useGetInfinity, keys } from 'src/hooks';
import { useInView } from 'react-intersection-observer';
import OCard from '../../Card/OCard';
import styled from 'styled-components';
import { o } from 'src/api';
import { InfinityProps, Outsource } from 'src/types';

function RenderOutsource() {
  const [shearchTitle, setShearchTitle] = useState<string>();
  const [shearchTag, setShearchTag] = useState<string>();
  const { data, fetchNextPage, hasNextPage, isSuccess, refetch } = useGetInfinity<InfinityProps<Outsource[]>>({
    fetch: o.getInfinity,
    queryKey: keys.outsources(),
  });

  const [ref, isView] = useInView();
  useEffect(() => {
    // 무한 스크롤
    if (isView && hasNextPage) fetchNextPage();
    if (!data) refetch();
  }, [isView, hasNextPage, fetchNextPage, refetch, data]);
  return (
    <ContentCardList>
      {isSuccess && data?.pages
        ? data.pages.map((page) => {
            const data = page.result;
            return data?.map((o, index) => {
              if (index == data.length - 1) {
                return (
                  <RefCard ref={ref} key={'outsourcing' + o.id}>
                    <OCard data={o} />
                  </RefCard>
                );
              }
              return (
                <RefCard key={o.id}>
                  <OCard data={o} />
                </RefCard>
              );
            });
          })
        : null}
    </ContentCardList>
  );
}

export default RenderOutsource;

const ContentCardList = styled.div`
  display: grid;
  place-items: center;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
  overflow: hidden;
`;
const RefCard = styled.div`
  width: 100%;
`;
