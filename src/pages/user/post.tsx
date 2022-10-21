import React from 'react';
import { GetServerSideProps, NextPage } from 'next';

import { Layout } from 'src/Layout';
import { AxiosRequestConfig } from 'axios';
import { QueryClient, dehydrate } from 'react-query';
import { ssr } from 'src/api';
import { errorHandler } from 'src/api/errorHandler';
import { keys } from 'src/hooks';
import { Poster } from 'src/components/Users';
const PosterList: NextPage = () => {
  return (
    <Layout myNavigator>
      <Poster />
    </Layout>
  );
};

export default PosterList;

// export const getServerSideProps: GetServerSideProps = errorHandler(async ({ ctx: { req, query }, cookie, exp }) => {
//   const queryClient = new QueryClient();
//   if (exp?.access_exp) {
//     await queryClient.prefetchQuery(keys.auth, () => ssr.auth(req as AxiosRequestConfig));
//   }
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//       exp: exp,
//     },
//   };
// });
