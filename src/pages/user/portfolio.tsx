import React from 'react';
import { Portfolio } from 'src/components/Users';
import { UserPage } from 'src/components/Users/UserPage';
import { Layout } from 'src/Layout';

type Props = {};

const Index = (props: Props) => {
  return (
    <Layout>
      <UserPage>
        <Portfolio />
      </UserPage>
    </Layout>
  );
};

export default Index;
