import { NextPage } from 'next';
import React from 'react';
import { AdminUser } from 'src/components/Users/AdminUser';
import { Layout } from 'src/Layout';

type Props = {};

const Index: NextPage = (props: Props) => {
  return (
    <Layout>
      <AdminUser />
    </Layout>
  );
};

export default Index;
