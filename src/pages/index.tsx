import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Layout } from '../components/Layout';
import { me, questions, users, requests } from 'src/store/DummyData';
import { MainContent } from 'src/components/MainContent';
import { NextPageContext } from 'next'
import { GetServerSideProps } from 'next';
import  axios  from 'axios';
import { cookieManager } from 'src/lib/cookieManager';



const Home: NextPage = () => {
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.setQueryData('me', me);
    queryClient.setQueryData('questions', questions());
    queryClient.setQueryData('requests', requests());
    queryClient.setQueryData('users', users()); //임시
  }, []);

  return (
    <>
      <Layout >
        <MainContent />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
			console.log( await cookieManager(req.headers.cookie))
			return { props: {} }

}

export default Home;


