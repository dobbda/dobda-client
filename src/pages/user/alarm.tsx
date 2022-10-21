import { NextPage } from 'next';
import React from 'react';
import { UserPage } from 'src/components/Users/UserPage';
import { Layout } from 'src/Layout';

type Props = {};

const Dingdong: NextPage = (props: Props) => {
  return (
    <Layout myNavigator>
      <UserPage>
        <h1>dingdong</h1>
      </UserPage>
    </Layout>
  );
};

export default Dingdong;
