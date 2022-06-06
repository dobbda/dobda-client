import type { NextPage } from 'next';
import React, {useEffect} from 'react';
import { useQueryClient } from 'react-query';
import Layout from '../components/common/Layout/Layout';
import { me } from 'src/store/response_structure';

const Home: NextPage = () => {
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.setQueryData('me', me) //임시
  }, [])
  
  return (
    <Layout>
      <h1>hello children</h1>
    </Layout>
  );
};

export default Home;
