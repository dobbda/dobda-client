import { NextPage } from 'next';
import { MyInfo } from 'src/components/MyInfo';
import { Layout } from 'src/components/Layout';
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
