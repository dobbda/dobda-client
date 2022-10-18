import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { noti } from 'src/api';
import { Empty } from 'src/components/common';
import Link from 'next/link';

export const NotiList = () => {
  const { data } = useQuery('notis', noti.getNotis, {
    staleTime: Infinity,
  });
  console.log(data);
  return (
    <div>
      <ul css={{ padding: '0 10px 0' }}>
        {data[0].id ? (
          data?.map((noti) => (
            <Link href={noti.link ? noti.link : `/notice/` + noti.id} key={noti.id}>
              <a>
                <Item>
                  {noti.link && <span css={{ color: '#ffbc65' }}> [Notion] </span>}
                  {noti.title}
                </Item>
              </a>
            </Link>
          ))
        ) : (
          <More>
            <Link href="/notice">전체보기 </Link>
          </More>
        )}
      </ul>
    </div>
  );
};

const Item = styled.li`
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  color: #4a4a4a;
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
  margin: 10px 0 0 10px;
  font-size: 12px;
  color: #2555ad;
`;
