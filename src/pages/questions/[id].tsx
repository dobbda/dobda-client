import { Layout } from 'src/Layout';
import { QDetail } from 'src/components/DetailPage';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { QuestionDetail } from 'src/types';
import { q, reqAuth, ssr } from 'src/api';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { keys } from 'src/hooks';
import { useEffect, useLayoutEffect } from 'react';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { errorHandler } from 'src/api/errorHandler';
import { setLocalStorage } from 'src/lib/utils/localStorage';
import { Exp } from 'src/types/content-type';

const QuestionDetailPage: NextPage<{ exp: Exp; id: string }> = (props) => {
  setLocalStorage('exp', JSON.stringify(props.exp));

  const router = useRouter();
  const { id } = props;
  const { data, error, isError, isSuccess } = useQuery(keys.qDetail(id), () => q.questionDetail<QuestionDetail>(id), {
    retry: 0,
    staleTime: Infinity,
  });
  useEffect(() => {
    if (isError) {
      router.push('/404', router.asPath, { shallow: true });
    }
  }, [router, isError]);
  return <Layout sideRight>{data && <QDetail data={data} />}</Layout>;
};
export default QuestionDetailPage;

export const getServerSideProps: GetServerSideProps = errorHandler(async ({ ctx: { req, query }, cookie, exp }) => {
  const queryClient = new QueryClient();
  const { id } = query as { id: string };

  await queryClient.prefetchQuery(keys.qDetail(id), () => ssr.question(req as AxiosRequestConfig, id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id: id,
      exp,
    },
  };
});
