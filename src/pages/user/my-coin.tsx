import { AxiosRequestConfig } from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { QueryClient, dehydrate } from 'react-query';
import { ssr } from 'src/api';
import { errorHandler } from 'src/api/errorHandler';
import { UserPage } from 'src/components/Users/UserPage';
import { keys } from 'src/hooks';
import { Layout } from 'src/Layout';

const coinhistory: NextPage = () => {
  return (
    <Layout myNavigator>
      <UserPage>
        <div>
          coinhistory
          <p>
            <Link href="/payment/deposit" passHref>
              충전하기
            </Link>
          </p>
          <h3>
            <Link href="/payment/withdrawal" passHref>
              충전하기
            </Link>
          </h3>
        </div>
      </UserPage>
    </Layout>
  );
};

export default coinhistory;

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
