import { Layout } from 'src/Layout';
import { QuestionPage } from 'src/components/DetailPage';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { QuestionDetail } from 'src/interface';
import { q, reqAuth, ssr } from 'src/api';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { keys } from 'src/hooks';
import { useEffect, useLayoutEffect } from 'react';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { errorHandler } from 'src/api/errorHandler';
import { setLocalStorage } from 'src/lib/utils/localStorage';
import { Exp } from 'src/interface/content-type';
import { SEO } from 'src/components/common';
import { ssrQuery } from 'src/hooks/queries/defaultQueryClient';
import { getPf } from 'src/api/apis/user';
import PortfolioPage from 'src/components/Users/portfolio/public/PortfolioPage';

const Page: NextPage<{ exp: Exp; id: string }> = (props) => {
  setLocalStorage('exp', JSON.stringify(props.exp));

  const router = useRouter();
  const { id } = props;
  const { data, error, isError, isSuccess } = useQuery(keys.pf(id), () => getPf(Number(id)), {
    retry: 0,
    staleTime: Infinity,
  });

  console.log(data);
  return (
    <>
      {/* <SEO title={data.title} content={data.content} url={'/questions/' + data.id} tags={data.tagNames} image="/img/qs.png" /> */}
      <Layout>
        {data.id ? (
          <PortfolioPage data={data} />
        ) : (
          <h1 css={{ marginTop: '20px', textAlign: 'center', color: '#747474' }}> 프로필 업데이트 전입니다.</h1>
        )}
      </Layout>
      ;
    </>
  );
};
export default Page;

const queryClient = ssrQuery();
export const getServerSideProps: GetServerSideProps = errorHandler(async ({ ctx: { req, query }, cookie, exp }) => {
  const { id } = query as { id: string };
  if (exp?.access_exp) {
    await queryClient.prefetchQuery(keys.auth, () => ssr.auth(req as AxiosRequestConfig));
  }
  await queryClient.prefetchQuery(keys.pf(id), () => ssr.getPf(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id: id,
      exp,
    },
  };
});
