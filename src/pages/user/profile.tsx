import { NextPage } from 'next';
import { MyInfo } from 'src/components/UserInfo';
import { Layout } from 'src/Layout';
import React from 'react';

type Props = {};

const MyProfile: NextPage = (props: Props) => {
  return (
    <Layout sideLeft>
      <MyInfo />
    </Layout>
  );
};
export default MyProfile;
