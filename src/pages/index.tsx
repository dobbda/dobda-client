import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import { dehydrate, QueryClient, useQuery, useQueryClient } from 'react-query';
import { Layout } from 'src/Layout';
import { MainContent } from 'src/components/MainContent';
import { NextPageContext } from 'next';
import { GetServerSideProps } from 'next';
import axios, { AxiosRequestConfig } from 'axios';
import { http, reqAuth, ssr, user } from 'src/api';
import { keys } from 'src/hooks';
import { cookieDecod } from 'src/lib/utils/cookieDecod';
import { getLocalStorage, setLocalStorage } from 'src/lib/utils/localStorage';
import { Exp } from 'src/types/content-type';
import { errorHandler } from 'src/api/errorHandler';

const Home: NextPage<{ exp: Exp }> = (props) => {
  setLocalStorage('exp', JSON.stringify(props.exp));
  return (
    <Layout sideLeft sideRight>
      <MainContent />
    </Layout>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = errorHandler(async ({ ctx: { req, query }, cookie, exp }) => {
  const queryClient = new QueryClient();
  if (exp?.access_exp) {
    await queryClient.prefetchQuery(keys.auth, () => ssr.auth(req as AxiosRequestConfig));
  }
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      exp: exp,
    },
  };
});
