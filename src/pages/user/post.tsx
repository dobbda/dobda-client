import React from 'react';
import { GetServerSideProps, NextPage } from 'next';

import { Layout } from 'src/Layout';
import { AxiosRequestConfig } from 'axios';
import { QueryClient, dehydrate } from 'react-query';
import { ssr } from 'src/api';
import { errorHandler } from 'src/api/errorHandler';
import { keys } from 'src/hooks';
import { Poster } from 'src/components/Users';
import { UserPage } from 'src/components/Users/UserPage';

const Index: NextPage = () => {
  return (
    <Layout>
      <UserPage>
        <Poster />
      </UserPage>
    </Layout>
  );
};

export default Index;
