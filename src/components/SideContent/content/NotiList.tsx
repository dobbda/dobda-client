import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { noti } from 'src/api';
import { Empty, Link } from 'src/components/common';

export const NotiList = () => {
  const { data } = useQuery('notis', noti.getNotis, {
    staleTime: Infinity,
  });
  return (
    <div>
      {data ? (
        data?.map((noti) => (
          <Link href={`/notice/` + noti.id} key={noti.id}>
            <Item>
              {'> '}
              {noti.title}
            </Item>
          </Link>
        ))
      ) : (
        <Empty />
      )}
    </div>
  );
};

const Item = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  color: #4a4a4a;
  text-align: left;
  padding: 7px 10px;
  :hover {
    color: #222091;
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-color: #808080;
  }
`;
