import React from 'react';
import type { NextPage } from 'next';
import { Layout } from 'src/Layout';

type Props = {};

const notice: NextPage = () => {
  return (
    <Layout sideLeft sideRight>
      <h1>notice</h1>
    </Layout>
  );
};

export default notice;
