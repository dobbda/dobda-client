import { NextPage } from 'next';
import React from 'react';
import { AlarmPage } from 'src/components/Users';
import { UserPage } from 'src/components/Users/UserPage';
import { Layout } from 'src/Layout';

type Props = {};

const Dingdong: NextPage = (props: Props) => {
  return (
    <Layout myNavigator>
      <UserPage>
        <AlarmPage />
      </UserPage>
    </Layout>
  );
};

export default Dingdong;
