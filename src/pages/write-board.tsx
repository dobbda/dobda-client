import React from 'react';
import type { NextPage } from 'next';
import { Layout } from 'src/components/Layout';
import dynamic from 'next/dynamic';
// const Write = dynamic(() => import('src/components/Write/Write'), { ssr: false }); // client 사이드에서만 동작되기 때문에 ssr false로 설정

import Write from 'src/components/Write/Write';
type Props = {};

const WriteBoard: NextPage = (props: Props) => {
  return (
    <Layout sideLeft>
      <Write />
    </Layout>
  );
};

export default WriteBoard;
