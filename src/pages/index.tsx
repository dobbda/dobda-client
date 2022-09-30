import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import { dehydrate, QueryClient, useQuery, useQueryClient } from 'react-query';
import { Layout } from '../components/Layout';
import { MainContent } from 'src/components/MainContent';
import { NextPageContext } from 'next';
import { GetServerSideProps } from 'next';
import axios, { AxiosRequestConfig } from 'axios';
import { http, reqAuth, user } from 'src/api';
import { keys } from 'src/hooks';
import { cookieDecod } from 'src/lib/utils/cookieDecod';
import { getLocalStorage, setLocalStorage } from 'src/lib/utils/localStorage';
interface Props {
  exp: JSON;
}
const Home: NextPage<Props> = (props) => {
  setLocalStorage('exp', JSON.stringify(props.exp));
  return (
    <Layout sideLeft sideRight>
      <MainContent />
    </Layout>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const queryClient = new QueryClient();

  if (req?.headers?.cookie?.includes('jwt-access')) {
    await queryClient.prefetchQuery(keys.auth, () => reqAuth.httpAuth(req as AxiosRequestConfig), {});
  }
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      exp: cookieDecod(req, res),
    },
  };
};
