import React, { useEffect } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { Layout } from 'src/Layout';
import { HtmlViewer } from 'src/components/Editor';
import { useQuery } from 'react-query';
import { noti } from 'src/api';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { CreatedAt } from 'src/components/common/@share/atom';
import { theme } from 'src/styles/Theme';

type Props = {
  id: number;
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  return {
    props: { id },
  };
};
const NotiList: NextPage<Props> = ({ id }) => {
  console.log(id);

  const { data, isSuccess } = useQuery(['noti:', id], () => noti.getNoti(id));
  return (
    <Layout sideLeft sideRight banner>
      <S>
        <h2 className="title">{data?.title}</h2>
        <span className="createdAt">작성 : {data?.createdAt.substring(0, 10)}</span>
        <div className="notice-content">{isSuccess && <HtmlViewer content={data?.content} />}</div>
      </S>
    </Layout>
  );
};

export default NotiList;

const S = styled.div`
  background-color: #fafafa;
  position: relative;
  width: 100%;
  min-height: 800px;
  padding: 30px 20px;

  .createdAt {
    position: absolute;
    color: #979797;
    right: 10px;
  }
  .notice-content {
    margin-top: 35px;
  }

  .title {
    color: #35333b;
  }
`;
