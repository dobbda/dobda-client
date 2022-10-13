import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import { CreateNoti } from 'src/components/Admin';
import { Layout } from 'src/Layout';

const Write: NextPage = (props) => {
  return (
    <Layout>
      <CreateNoti />
    </Layout>
  );
};
export default Write;
