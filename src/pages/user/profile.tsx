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

const MyProfile: NextPage = (props: Props) => {
  return (
    <Layout myNavigator>
      <MyInfo />
    </Layout>
  );
};
export default MyProfile;

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
