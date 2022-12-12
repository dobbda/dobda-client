import { Layout } from 'src/Layout';
import { SourcingPage } from 'src/components/DetailPage';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { o, q, reqAuth, ssr } from 'src/api';
import { OutsourceDetail, QuestionDetail } from 'src/interface';
import { useEffect, useLayoutEffect } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { keys } from 'src/hooks';
import { AxiosRequestConfig } from 'axios';
import { errorHandler } from 'src/api/errorHandler';
import { Exp } from 'src/interface/content-type';
import { setLocalStorage } from 'src/lib/utils/localStorage';
import { SEO } from 'src/components/common';
import { ssrQuery } from 'src/hooks/queries/defaultQueryClient';
import { outsourceDetail } from 'src/api/apis/sourcing';

const RequestDetailPage: NextPage<{ exp: Exp; id: string }> = (props) => {
  const router = useRouter();
  setLocalStorage('exp', JSON.stringify(props.exp));
  const { id } = props;
  const { data, error, isError, isSuccess } = useQuery(keys.oDetail(id), () => outsourceDetail<OutsourceDetail>(Number(id)), {
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

const queryClient = ssrQuery();
export const getServerSideProps: GetServerSideProps = errorHandler(async ({ ctx: { req, query }, cookie, exp }) => {
  const { id } = query as { id: string };
  if (exp?.access_exp) {
    await queryClient.prefetchQuery(keys.auth, () => ssr.auth(req as AxiosRequestConfig));
  }
  await queryClient.prefetchQuery(keys.oDetail(id), () => ssr.sourcing(req as AxiosRequestConfig, id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      exp,
      id: id,
    },
  };
});
