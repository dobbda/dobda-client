import { Layout } from 'src/components/Layout';
import { ODetail } from 'src/components/DetailPage';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { o, q } from 'src/api';
import { OutsourceDetail, QuestionDetail } from 'src/types';
import { useEffect, useLayoutEffect } from 'react';
import { useQuery } from 'react-query';
import { keys } from 'src/hooks';

const RequestDetailPage: NextPage = () => {
  const router = useRouter();
  const { oid } = router.query;
  const { data, error, isError, isSuccess } = useQuery(
    keys.oDetail(Number(oid)),
    () => o.outsourceDetail<OutsourceDetail>(Number(oid)),
    {
      retry: 0,
      staleTime: Infinity,
    },
  );

  useEffect(() => {
    if (isError) {
      router.push('/404', router.asPath, { shallow: true });
    }
  }, [router, isError]);
  return <Layout aside={<>카테고리?</>}>{data && <ODetail data={data} />}</Layout>;
};

export default RequestDetailPage;
