import { Layout } from 'src/Layout';
import { ODetail } from 'src/components/DetailPage';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { o, q, reqAuth, ssr } from 'src/api';
import { OutsourceDetail, QuestionDetail } from 'src/types';
import { useEffect, useLayoutEffect } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { keys } from 'src/hooks';
import { AxiosRequestConfig } from 'axios';
import { errorHandler } from 'src/api/errorHandler';
import { Exp } from 'src/types/content-type';
import { setLocalStorage } from 'src/lib/utils/localStorage';

const RequestDetailPage: NextPage<{ exp: Exp }> = (props) => {
  const router = useRouter();
  setLocalStorage('exp', JSON.stringify(props.exp));
  const { id } = router.query as { id: string };
  const { data, error, isError, isSuccess } = useQuery(keys.oDetail(id), () => o.outsourceDetail<OutsourceDetail>(Number(id)), {
    retry: 0,
    staleTime: Infinity,
    enabled: id !== undefined,
  });

  useEffect(() => {
    if (isError) {
      router.push('/404', router.asPath, { shallow: true });
    }
  }, [router, isError]);
  return <Layout sideRight>{data && <ODetail data={data} />}</Layout>;
};
export default RequestDetailPage;

export const getServerSideProps: GetServerSideProps = errorHandler(async ({ ctx: { req, query }, cookie, exp }) => {
  const queryClient = new QueryClient();
  const { id } = query as { id: string };

  await queryClient.prefetchQuery(keys.oDetail(id), () => ssr.outsourcing(req as AxiosRequestConfig, id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      exp,
    },
  };
});
