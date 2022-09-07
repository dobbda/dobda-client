import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { CoinDeposit as Payment } from 'src/components/Payment';
import { Layout } from 'src/components/Layout';
import { NextPage } from 'next';
type Props = {};

const CoinDeposit: NextPage = (props: Props) => {
  return (
    <Layout>
      {/* jQuery */}
      <Script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></Script>
      {/* iamport.payment.js  */}
      <Script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"></Script>
      <Payment></Payment>
    </Layout>
  );
};

export default CoinDeposit;
