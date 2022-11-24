import React, { useEffect, useState } from 'react';
import { keys, useInfinity } from 'src/hooks';
import { useInView } from 'react-intersection-observer';
import QCard from '../../Card/QCard';
import styled from 'styled-components';
import { q } from 'src/api';
import { Question } from 'src/types';
import { theme } from 'src/styles/Theme';
import { Skeleton } from 'src/components/Skeleton';

function RenderQuestion() {
  const [shearchTitle, setShearchTitle] = useState<string>();
  const [shearchTag, setShearchTag] = useState<string>();
  const { data, nextPage, refetch, isLoading } = useInfinity<Question>({
    fetch: q.getInfinity,
    queryKey: keys.questions(),
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
        <Skeleton row={3} title border avatar len={3} />
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
  margin-bottom: 10px;
  padding: 10px;
  gap: 20px;
`;
const RefCard = styled.div`
  width: 100%;
  /* border: 1px solid #e3e6e8; */
  box-shadow: 0 0 0 1px #e3e6e8;

  padding: 10px 15px;
  border-radius: 10px;
  :hover {
    margin-left: -1px;
    margin-right: -1px;
    box-shadow: 0 0 0 1px ${theme.color.prRgb(0.5)};
    transition: all 0.2s;
  }
`;
