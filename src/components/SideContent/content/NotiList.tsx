import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { noti } from 'src/api';
import { Empty } from 'src/components/common';
import Link from 'next/link';
import { Skeleton } from 'src/components/Skeleton';

export const NotiList = () => {
  const { data, isLoading } = useQuery('notis', noti.getNotis, {
    staleTime: Infinity,
  });
  return (
    <div>
      {isLoading ? (
        <Skeleton row={3} />
      ) : data ? (
        <ul css={{ padding: '0 10px 0' }}>
          {' '}
          {data?.map((noti, i) => (
            <Link href={noti.link ? noti.link : `/notice/` + noti.id} key={i}>
              <Item>
                <Index>{i}. </Index>
                {noti.link && <span css={{ color: '#ffbc65' }}> [Notion] </span>}
                <a>{noti.title}</a>
              </Item>
            </Link>
          ))}
          <More>
            <Link href="/notice">전체보기 </Link>
          </More>
        </ul>
      ) : (
        <Empty />
      )}
    </div>
  );
};

const Item = styled.li`
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  color: #333333df;
  font-size: 13px;
  text-align: left;
  padding: 6px 10px 3px;
  transition: all 0.2s;
  align-items: center;
  :hover {
    color: #222091;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: #808080;
  }
`;

const More = styled.li`
  margin: 10px 0 0 20px;
  font-size: 12px;
  color: #2555ad;
`;

const Index = styled.span`
  color: #33333394;
  font-size: 13;
  font-weight: bold;
`;
