import type { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/styles/theme';
// import Layout from "../components/common/Layout/Layout"
const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Layout > */}
      <h1>hello children</h1>
      {/* </Layout> */}

    </ThemeProvider>
  );
};

export default Home;
