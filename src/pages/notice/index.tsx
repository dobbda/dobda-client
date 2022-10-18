import React from 'react';
import styled from 'styled-components';
import type { NextPage } from 'next';
import { Layout } from 'src/Layout';
import { useQuery } from 'react-query';
import { noti } from 'src/api';
import { Divider, List, Typography } from 'antd';
import { Noti } from 'src/types';
import Link from 'next/link';

const NotiList: NextPage = () => {
  const { data } = useQuery('notis', noti.getNotis);
  return (
    <Layout sideLeft sideRight>
      <Divider orientation="left">
        <h3>공지사항</h3>
      </Divider>
      <List
        header={
          <Header>
            <span>제목</span>
            <span>생성날짜</span>
          </Header>
        }
        bordered
        dataSource={data}
        renderItem={(item: Noti) => (
          <List.Item>
            <Link href={item.link ? item.link : `/notice/` + item.id}>
              <Item>
                <div>
                  {item.link && <Notion>[Notion] </Notion>}
                  {item.title}
                </div>
                <span css={{ color: '#a7a7a7' }}>{item.createdAt.substring(0, 10)}</span>
              </Item>
            </Link>
          </List.Item>
        )}
      />
    </Layout>
  );
};

export default NotiList;

const Item = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 100%;

  div {
    color: #444444;
    :hover {
      text-decoration: underline;
      text-underline-offset: 5px;
      text-decoration-color: #666666;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 15px;
  width: 100%;

  > * {
    font-weight: bold;
    color: #686868;
  }
`;

const Notion = styled.span`
  color: #ffbc65;
`;
