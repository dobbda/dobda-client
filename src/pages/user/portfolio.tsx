import React from 'react';
import { MyPortfolio } from 'src/components/Users';
import { UserPage } from 'src/components/Users/UserPage';
import { Layout } from 'src/Layout';

type Props = {};

const Index = (props: Props) => {
  return (
    <Layout>
      <UserPage>
        <MyPortfolio />
      </UserPage>
    </Layout>
  );
};

export default Index;
