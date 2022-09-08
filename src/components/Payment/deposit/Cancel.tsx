import React, { FC, useState } from 'react';
import { RequestPayParams, RequestPayResponse } from 'iamport-typings';
import styles from './Payment.module.css';
import axios from 'axios';

const initialState: RequestPayParams = {
  pg: 'html5_inicis',
  pay_method: 'card', // 결제수단
  name: '테스트 주문', // 주문명
  merchant_uid: '', // 주문번호
  amount: 1000, // 결제금액
  buyer_tel: '000-0000-0000', // 구매자 전화번호
};

export const CancelPayment = () => {
  const IMP_UID = process.env.NEXT_PUBLIC_IMP_UID;
  const google = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  console.log('아이디: ', IMP_UID && IMP_UID);
  const [params, setParams] = useState<RequestPayParams>(initialState);
  const [result, setResult] = useState<RequestPayResponse>();

  const onClickPayment = () => {
    const { IMP } = window;
    console.log('imp: ', IMP);
    if (IMP) {
      IMP.init(IMP_UID);
      IMP.request_pay(params, onPaymentAccepted);
    }
  };

  const onPaymentAccepted = (response: RequestPayResponse) => {
    console.log(response);
    setResult(response);
  };

  return (
    <>
      <button onClick={onClickPayment}> </button>
    </>
  );
};
