import { AxiosRequestConfig } from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { dehydrate } from 'react-query';
import { ssr } from 'src/api';
import { ssrHandler } from 'src/api/errorHandler';
import { AdminUser } from 'src/components/Users/AdminUser';
import { keys, useAuth } from 'src/hooks';
import { ssrQuery } from 'src/hooks/queries/defaultQueryClient';
import { Layout } from 'src/Layout';

const Index: NextPage = () => {
  const { auth } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!auth?.id) {
      router.push('/');
    }
  }, [auth]);
  return <Layout>{auth?.id && <AdminUser />}</Layout>;
};

export default Index;

const queryClient = ssrQuery();
export const getServerSideProps: GetServerSideProps = ssrHandler(
  async ({ ctx: { req, query }, cookie, exp }) => {
    if (exp?.access_exp) {
      await queryClient.prefetchQuery(keys.auth, () =>
        ssr.auth(req as AxiosRequestConfig),
      );
    }

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        exp: exp,
      },
    };
  },
);
