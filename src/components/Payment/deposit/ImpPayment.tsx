import React, { FC, useCallback, useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Button } from 'antd';
import { RequestPayParams, RequestPayResponse } from 'iamport-typings';
import styled from 'styled-components';
import * as S from './style/style';

import 'antd/dist/antd.css';
import { CoinIcon } from 'src/assets/icons';



export const CoinDeposit = () => {
  

  const IMP_UID = process.env.NEXT_PUBLIC_IMP_UID;
  const [result, setResult] = useState<RequestPayResponse>();
  const [depositValue, setDepositValue] = useState(0);




  const onClickPayment = useCallback(() => {
    const initialState: RequestPayParams = {
      pg: 'html5_inicis',
      pay_method: 'card', // 결제수단
      name: '테스트 주문', // 주문명
      merchant_uid: '', // 주문번호
      amount: depositValue, // 결제금액
      buyer_tel: '000-0000-0000', // 구매자 전화번호
    };
    const { IMP } = window;
    console.log('imp: ', IMP);
    if (IMP) {
      IMP.init(IMP_UID);
      IMP.request_pay(initialState, onPaymentAccepted);
    }
  },[IMP_UID, depositValue]);

  const onPaymentAccepted = (response: RequestPayResponse) => {
    console.log(response);
    setResult(response);
  };

  const getDepositValue = (e: RadioChangeEvent) => {
    setDepositValue(e.target.value);
  };
  return (
    <S.CoinContainer>
      <div>
        <h1>코인 충전</h1>
      </div>

      <S.Wrapper>
        <Radio.Group onChange={getDepositValue} style={{width:"100%", maxWidth: '300px' }} defaultValue={1000}>
          <RadioStyles value={1000}>
            <S.Flex>
              <S.Coin>1000 코인 </S.Coin>
              <CoinFill />
            </S.Flex>
          </RadioStyles>
          <RadioStyles value={5000}>
            <S.Flex>
              <S.Coin>5,000 코인</S.Coin>
              <CoinFill />
            </S.Flex>
          </RadioStyles>
          <RadioStyles value={10000}>
            <S.Flex>
              <S.Coin>10,000 코인</S.Coin>
              <CoinFill />
            </S.Flex>
          </RadioStyles>
          <RadioStyles value={20000}>
            <S.Flex>
              <S.Coin>20,000 코인</S.Coin>
              <CoinFill />
            </S.Flex>
          </RadioStyles>
          <RadioStyles value={30000}>
            <S.Flex>
              <S.Coin>30,000 코인</S.Coin>
              <CoinFill />
            </S.Flex>
          </RadioStyles>
          <RadioStyles value={40000}>
            <S.Flex>
              <S.Coin>40,000 코인</S.Coin>
              <CoinFill />
            </S.Flex>
          </RadioStyles>
          <RadioStyles value={50000}>
            <S.Flex>
              <S.Coin>50,000 코인</S.Coin>
              <CoinFill />
            </S.Flex>
          </RadioStyles>
          <RadioStyles value={100000}>
            <S.Flex>
              <S.Coin>100,000 코인</S.Coin>
              <CoinFill />
            </S.Flex>
          </RadioStyles>
        </Radio.Group>
        <br />
        <br />
        <S.Flex>
          <p>충전후 보유 코인</p> <S.Coin>{depositValue} 코인</S.Coin>
        </S.Flex>
        <S.Hr />
        <br />
        <br />
        <S.Flex>
          <p>결제 금액</p> <S.Money>{depositValue} 원</S.Money>
        </S.Flex>
        <S.Hr />
        <br />
        <br />
        <Button type="primary" onClick={onClickPayment} block>
          {' '}
          결제하기
        </Button>
      </S.Wrapper>
      <div>
        <br/>
        <h3>check response </h3>
      {result && <pre>{JSON.stringify(result, null, " ")}</pre>}
      </div>
    </S.CoinContainer>
  );
};

const RadioStyles = styled(Radio.Button)`
  display: block;
  margin: 5px;
  padding-top: 10px;
  height: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  /* max-width: 800px; */
`;

const CoinFill = styled(CoinIcon)`
  width: 20px;
  height: 20px;
  color: #f2bc1a;
`;
