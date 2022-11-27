import { AxiosRequestConfig } from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react';
import { dehydrate, useQuery } from 'react-query';
import { ssr, user } from 'src/api';
import { errorHandler } from 'src/api/errorHandler';
import { MyPortfolio } from 'src/components/Users';
import { UserPage } from 'src/components/Users/UserPage';
import { keys } from 'src/hooks';
import { ssrQuery } from 'src/hooks/queries/defaultQueryClient';
import { Layout } from 'src/Layout';

type Props = {};

const Index = (props: Props) => {
  const { data, isSuccess } = useQuery(keys.pf(3), () => user.getPf(3), {
    staleTime: 1000 * 60 * 10,
  });
  return (
    <Layout>
      <UserPage>{isSuccess && <MyPortfolio data={data} />}</UserPage>
    </Layout>
  );
};

export default Index;

const queryClient = ssrQuery();
export const getServerSideProps: GetServerSideProps = errorHandler(async ({ ctx: { req, query }, cookie, exp }) => {
  const { num } = query as { num: string };
  if (exp?.access_exp) {
    await queryClient.prefetchQuery(keys.auth, () => ssr.auth(req as AxiosRequestConfig));
    await queryClient.prefetchQuery(keys.auth, () => ssr.portfolio(num, req as AxiosRequestConfig));
  }
  console.log(query.num);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      exp: exp,
    },
  };
});
