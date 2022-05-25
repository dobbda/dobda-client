import type { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/styles/Theme';
import Layout from '../components/common/Layout/Layout';
const DevShin: NextPage = () => {
  //test page
  return (
    <Layout>
      <h1>hello test page</h1>
    </Layout>
  );
};

export default DevShin;
