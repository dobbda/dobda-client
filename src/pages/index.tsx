import type { NextPage } from 'next';
import React, {useEffect} from 'react';
import { useQueryClient } from 'react-query';
import {Layout} from '../components/common';
import { me } from 'src/store/response_structure';
import  {MainContent}  from 'src/components/MainContent';

const Home: NextPage = () => {
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.setQueryData('me', me) //임시
  }, [])
  
  return (
    <Layout>
      <MainContent/>
    </Layout>
  );
};

export default Home;
