import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Layout } from '../components/Layout';
import { me, questions, users, requests } from 'src/store/DummyData';
import { MainContent } from 'src/components/MainContent';
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
      <Layout>
        <MainContent />
      </Layout>
    </>
  );
};

export default Home;
