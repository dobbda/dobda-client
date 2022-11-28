import Divider from 'antd/lib/divider';
import Input from 'antd/lib/input/Input';
import React from 'react';
import { Button } from 'src/components/common';
import { Tips } from 'src/components/common/@share/Tips';
import { useAuth } from 'src/hooks';
import { theme } from 'src/styles/Theme';
import styled from 'styled-components';
import { CoinHistoryC } from './CoinHistory';
import { CoinReservC } from './CoinReserv';

type Props = {};

export function MyCoin({}: Props) {
  const { auth } = useAuth();
  return (
    <div css={{ paddingBottom: '15px' }}>
      <Divider orientation="left">
        <h2>마이 코인</h2>
      </Divider>

      <WithdrawWrapper>
        <div>
          보유코인: <span> {auth?.coin.toLocaleString()}</span>{' '}
        </div>{' '}
        <Button types="primary" $fill>
          충전하기
        </Button>
      </WithdrawWrapper>
      <br />
      <DepositWrapper>
        <Input type="number" placeholder="5,000" />
        <Button types="secondary" $fill>
          출금신청
        </Button>
      </DepositWrapper>

      <br />

      <hr />

      <div css={{ padding: '10px 0' }}>
        <span> 임시저장된 코인목록*</span>{' '}
        <Tips content="이미 차감된 코인이며, 질문이나 소싱에 등록된 코인이 임시저장소로 채택이나 소싱 완료시 각 유저에게 전달됩니다." />
      </div>
      <CoinReservC />
      <br />
      <div>코인 기록</div>
      <CoinHistoryC />
    </div>
  );
}

const DepositWrapper = styled.div`
  border: solid 1px ${theme.color.border(0.1)};

  padding: 10px;
  input {
    width: 200px;
    margin-right: 10px;
  }
  button {
    height: 30px;
  }
`;

const WithdrawWrapper = styled.div`
  border: solid 1px ${theme.color.border(0.1)};
  padding: 10px;
  button {
    height: 30px;
  }
  div {
    display: inline-block;
    width: 200px;
    margin-right: 10px;
    padding: 0 5px;
    color: #505050;
    font-weight: bold;
    font-size: 15px;
  }
`;

export default MyCoin;
