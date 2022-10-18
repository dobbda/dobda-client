import { NextPage } from 'next';
import React from 'react';
import { Layout } from 'src/Layout';

type Props = {};

const Dingdong: NextPage = (props: Props) => {
  return (
    <Layout sideLeft>
      <h1>dingdong</h1>
    </Layout>
  );
};

export default Dingdong;
