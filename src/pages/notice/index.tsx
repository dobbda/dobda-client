import React from 'react';
import styled from 'styled-components';
import type { NextPage } from 'next';
import { Layout } from 'src/Layout';
import { useQuery } from 'react-query';
import { noti } from 'src/api';
import { Divider, List, Typography } from 'antd';
import { Link } from 'src/components/common';
import { Noti } from 'src/types';

const NotiList: NextPage = () => {
  const { data } = useQuery('notis', noti.getNotis);
  console.log('notice data: ', data);
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
        // dataSource={data}
        renderItem={(item: Noti) => (
          <List.Item>
            <Link href={`/notice/` + item.id}>
              <Item>
                <h4>{item.title}</h4>
                <span>{item.createdAt.substring(0, 10)}</span>
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
  display: flex;
  justify-content: space-between;
  width: 100%;

  h3,
  h4 {
    color: #333333;
  }
  span {
    color: #575757;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 15px;
  width: 100%;

  > * {
    color: #7c7c7c;
  }
`;
