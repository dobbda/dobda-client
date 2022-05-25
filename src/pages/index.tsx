import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/common/Layout/Layout';
const Home: NextPage = () => {
  return (
    <Layout>
      <h1>hello children</h1>
    </Layout>
  );
};

export default Home;
