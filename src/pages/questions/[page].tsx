import { Layout } from 'src/components/Layout';
import { QDetail } from 'src/components/DetailPage';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { QuestionDetail } from 'src/types';
import { q } from 'src/api';
import { useQuery } from 'react-query';
import { keys } from 'src/hooks';
import { useEffect, useLayoutEffect } from 'react';

const QuestionDetailPage: NextPage = () => {
  const router = useRouter();
  const { qid } = router.query;
  console.log(qid);
  const { data, error, isError, isSuccess } = useQuery(
    keys.qDetail(Number(qid)),
    () => q.questionDetail<QuestionDetail>(Number(qid)),
    {
      retry: 0,
      staleTime: Infinity,
    },
  );
  useLayoutEffect(() => {
    if (isError) {
      router.push('/404', router.asPath, { shallow: true });
    }
  }, [router, isError]);
  return <Layout aside={<>카테고리?</>}>{data && <QDetail data={data} />}</Layout>;
};

export default QuestionDetailPage;
