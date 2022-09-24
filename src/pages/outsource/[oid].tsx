import { Layout } from 'src/components/Layout';
import { ODetail } from 'src/components/DetailPage';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { o, q, reqAuth } from 'src/api';
import { OutsourceDetail, QuestionDetail } from 'src/types';
import { useEffect, useLayoutEffect } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { keys } from 'src/hooks';
import { AxiosRequestConfig } from 'axios';

const RequestDetailPage: NextPage = () => {
  const router = useRouter();
  const { oid } = router.query;
  const { data, error, isError, isSuccess } = useQuery(
    keys.oDetail(Number(oid)),
    () => o.outsourceDetail<OutsourceDetail>(Number(oid)),
    {
      retry: 0,
      staleTime: Infinity,
      enabled: oid !== undefined,
    },
  );

  useEffect(() => {
    if (isError) {
      router.push('/404', router.asPath, { shallow: true });
    }
  }, [router, isError]);
  return <Layout sideRight>{data && <ODetail data={data} />}</Layout>;
};
export default RequestDetailPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const queryClient = new QueryClient();
  if (req?.headers?.cookie.includes('jwt-access')) {
    await queryClient.prefetchQuery(['auth'], () => reqAuth.httpAuth(req as AxiosRequestConfig));
  }
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
