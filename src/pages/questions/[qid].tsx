import { Layout } from 'src/components/Layout';
import { QDetail } from 'src/components/DetailPage';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { QuestionDetail } from 'src/types';
import { q, reqAuth } from 'src/api';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { keys } from 'src/hooks';
import { useEffect, useLayoutEffect } from 'react';
import { AxiosRequestConfig } from 'axios';

const QuestionDetailPage: NextPage = () => {
  const router = useRouter();
  const { qid } = router.query;
  const { data, error, isError, isSuccess } = useQuery(
    [keys.qDetail(Number(qid)), Number(qid)],
    () => q.questionDetail<QuestionDetail>(Number(qid && qid)),
    {
      retry: 0,
      staleTime: Infinity,
      enabled: qid !== undefined,
    },
  );
  useEffect(() => {
    if (isError) {
      router.push('/404', router.asPath, { shallow: true });
    }
  }, [router, isError]);
  return <Layout sideRight>{data && <QDetail data={data} />}</Layout>;
};
export default QuestionDetailPage;
