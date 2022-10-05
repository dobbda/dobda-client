import React, { useEffect, useState } from 'react';
import { useGetInfinity, keys } from 'src/hooks';
import { useInView } from 'react-intersection-observer';
import OCard from '../../Card/OCard';
import styled from 'styled-components';
import { o } from 'src/api';
import { InfinityProps, Outsource } from 'src/types';
import { motion } from 'framer-motion';

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
    <ContentCardList
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: [0.5, 1], height: 'auto', transition: { duration: 0.15 } }}
    >
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

const ContentCardList = styled(motion.div)`
  padding: 5px 0;
  display: grid;
  place-items: center;
  overflow: hidden;
  gap: 15px;
  margin-bottom: 10px;
`;
const RefCard = styled.div`
  width: 100%;
`;
