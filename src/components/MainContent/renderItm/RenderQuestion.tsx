import React, { useEffect, useState } from 'react';
import { useGetInfinity, keys, useDidMountEffect } from 'src/hooks';
import { useInView } from 'react-intersection-observer';
import QCard from '../../Card/QCard';
import styled from 'styled-components';
import { q } from 'src/api';
import { InfinityProps, Question } from 'src/types';
import { motion } from 'framer-motion';
import { theme } from 'src/styles/Theme';

function RenderQuestion() {
  const [shearchTitle, setShearchTitle] = useState<string>();
  const [shearchTag, setShearchTag] = useState<string>();
  const { data, fetchNextPage, hasNextPage, isSuccess, refetch } = useGetInfinity<InfinityProps<Question>>({
    fetch: q.getInfinity,
    queryKey: keys.questions(),
  });

  const [ref, isView] = useInView();
  useEffect(() => {
    // 무한 스크롤
    if (isView && hasNextPage) fetchNextPage();
    if (!data) refetch();
  }, [isView, data, hasNextPage, fetchNextPage, refetch]);

  return (
    <>
      {data ? (
        <ContentCardList
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: [0.5, 1], height: 'auto', transition: { duration: 0.15 } }}
        >
          {isSuccess && data?.pages
            ? data.pages.map((page) => {
                const question = page.result;
                return question?.map((q, index) => {
                  if (index == question.length - 1) {
                    return (
                      <RefCard ref={ref} key={q.id}>
                        <QCard data={q} />
                      </RefCard>
                    );
                  }
                  return (
                    <RefCard key={q.id}>
                      <QCard data={q} />
                    </RefCard>
                  );
                });
              })
            : null}
        </ContentCardList>
      ) : null}
    </>
  );
}

export default RenderQuestion;

const ContentCardList = styled(motion.div)`
  display: grid;
  place-items: center;
  overflow: hidden;
  transition: all 0.2s;
  margin-bottom: 10px;
  padding: 5px 0;
`;
const RefCard = styled.div`
  width: 100%;
  border-bottom: 1px solid #e3e6e8;
  padding: 10px 15px;
  :hover {
    margin-left: -1px;
    margin-right: -1px;
    box-shadow: 0 0 0 1px ${theme.color.prRgb(0.5)};
    transition: all 0.2s;
  }
`;
