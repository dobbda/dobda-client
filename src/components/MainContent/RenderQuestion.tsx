import React, { useEffect, useState } from 'react';
import { useGetInfinityQ, keys } from 'src/hooks';
import { useInView } from 'react-intersection-observer';
import QCard from '../Card/QCard';
import styled from 'styled-components';
import { q } from 'src/api';

function RenderQuestion() {
  const [shearchTitle, setShearchTitle] = useState<string>();
  const [shearchTag, setShearchTag] = useState<string>();
  const { data, fetchNextPage, hasNextPage, isSuccess } = useGetInfinityQ({
    title: shearchTitle,
    tag: shearchTag,
    fetch: q.getInfinityQ,
  });

  const [ref, isView] = useInView();
  useEffect(() => {
    // 무한 스크롤
    if (isView && hasNextPage) {
      fetchNextPage();
    }
  }, [isView, data, hasNextPage, fetchNextPage]);

  return (
    <ContentCardList>
      {isSuccess && data?.pages
        ? data.pages.map((page) => {
            const question = page.result;
            return question?.map((q, index) => {
              if (index == question.length - 1) {
                return (
                  <RefCard ref={ref} key={q.id}>
                    <QCard question={q} />
                  </RefCard>
                );
              }
              return <QCard key={q.id} question={q} />;
            });
          })
        : null}
    </ContentCardList>
  );
}

export default RenderQuestion;

const ContentCardList = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  place-items: center;
  gap: 10px;
`;
const RefCard = styled.div`
  width: 100%;
`;
