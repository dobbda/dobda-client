import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { AdminUser } from 'src/components/Users/AdminUser';
import { useAuth } from 'src/hooks';
import { Layout } from 'src/Layout';

type Props = {};

const Index: NextPage = (props: Props) => {
  const { auth } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!auth?.id) {
      router.push('/');
    }
  }, [auth]);
  return <Layout>{auth?.id && <AdminUser />}</Layout>;
};

export default Index;
