import { Layout } from 'src/Layout';
import { SourcingPage } from 'src/components/DetailPage';
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
import { SEO } from 'src/components/common';
import { ssrQuery } from 'src/hooks/queries/defaultQueryClient';

const RequestDetailPage: NextPage<{ exp: Exp; id: string }> = (props) => {
  const router = useRouter();
  setLocalStorage('exp', JSON.stringify(props.exp));
  const { id } = props;
  const { data, error, isError, isSuccess } = useQuery(keys.oDetail(id), () => o.outsourceDetail<OutsourceDetail>(Number(id)), {
    retry: 0,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (isError) {
      router.push('/404', router.asPath, { shallow: true });
    }
  }, [router, isError]);
  return (
    <>
      <SEO
        title={data.title}
        content={data.content}
        url={'/custom-project/requests/' + data.id}
        tags={data.tagNames}
        image={data?.cardImage}
      />
      <Layout sideRight>{data && <SourcingPage data={data} />}</Layout>;
    </>
  );
};
export default RequestDetailPage;

export const getServerSideProps: GetServerSideProps = errorHandler(async ({ ctx: { req, query }, cookie, exp }) => {
  const { id } = query as { id: string };
  if (exp?.access_exp) {
    await ssrQuery.prefetchQuery(keys.auth, () => ssr.auth(req as AxiosRequestConfig));
  }
  await ssrQuery.prefetchQuery(keys.oDetail(id), () => ssr.sourcing(req as AxiosRequestConfig, id));

  return {
    props: {
      dehydratedState: dehydrate(ssrQuery),
      exp,
      id: id,
    },
  };
});
