import { GetServerSideProps, NextPage } from 'next';
import { MyInfo } from 'src/components/Users';
import { Layout } from 'src/Layout';
import React from 'react';
import { AxiosRequestConfig } from 'axios';

import { QueryClient, dehydrate } from 'react-query';
import { ssr } from 'src/api';
import { errorHandler } from 'src/api/errorHandler';
import { keys } from 'src/hooks';

type Props = {};

const Index: NextPage = (props: Props) => {
  return (
    <Layout>
      <MyInfo />
    </Layout>
  );
};
export default Index;
