import React from 'react';
import { NextPage } from 'next';

import { Layout } from 'src/Layout';
import { MyPost } from 'src/components/MyPoster';
const PosterList: NextPage = () => {
  return (
    <Layout sideLeft>
      <MyPost />
    </Layout>
  );
};

export default PosterList;
