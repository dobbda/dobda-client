import React, { useEffect, useState } from 'react';
import { useGetInfinity, keys } from 'src/hooks';
import { useInView } from 'react-intersection-observer';
import OCard from '../../Card/OCard';
import styled from 'styled-components';
import { o } from 'src/api';
import { InfinityProps, Outsource } from 'src/types';
import { theme } from 'src/styles/Theme';
import { Skeleton } from 'src/components/Skeleton';

function RenderOutsource() {
  const [shearchTitle, setShearchTitle] = useState<string>();
  const [shearchTag, setShearchTag] = useState<string>();
  const { data, fetchNextPage, hasNextPage, isSuccess, refetch, isLoading } = useGetInfinity<InfinityProps<Outsource>>({
    fetch: o.getInfinity,
    queryKey: keys.sourcings(),
  });

  const [ref, isView] = useInView();
  useEffect(() => {
    // 무한 스크롤
    if (isView && hasNextPage) fetchNextPage();
    if (!data) refetch();
  }, [isView, hasNextPage, fetchNextPage, refetch, data]);
  return (
    <>
      {isLoading ? (
        <Skeleton row={4} border title len={3} image />
      ) : (
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
      )}
    </>
  );
}

export default RenderOutsource;

const ContentCardList = styled.div`
  padding: 10px;
  display: grid;
  place-items: center;
  overflow: hidden;
  gap: 15px;
  margin-bottom: 10px;
`;
const RefCard = styled.div`
  width: 100%;
  :hover {
    margin-left: -1px;
    margin-right: -1px;
    box-shadow: 0 0 0 1px ${theme.color.prRgb(0.5)};
    transition: all 0.2s;
  }
`;
