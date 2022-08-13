import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useQueryClient, useQuery } from 'react-query';

import { Div, ButtonGroup } from './style/inputCoinPopover.element';
import { Button, Input } from 'antd';
import { useClientValue } from 'src/hooks/queries/queryHooks';
import { variable } from 'src/config/defaultValue';
type Props = {};

export const CoinView = (props: Props) => {
  const [errMessage, setErrMessage] = useState('');
  const coin = useClientValue(['coin'], 0);
  const [newCoin, setNewCoin] = useState<number|string>(coin);
  const queryClient = useQueryClient();
  const [total, setTotal] = useState<number|string>("");

  const myTotalCoin = 10000;
  const onChangeCoin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCoin(Number(`${e.target.value}`));
  };
  const onclickOk = () => {
    if(newCoin===0){
      queryClient.setQueriesData('coin', newCoin)
      queryClient.setQueriesData(['coinVisible'], false)
    }
    if (newCoin >= variable.minCoin) {
      newCoin < myTotalCoin
        ? (queryClient.setQueriesData('coin', newCoin), queryClient.setQueriesData(['coinVisible'], false))
        : setErrMessage('보유코인이 부족합니다');
    } else {
      setErrMessage(`최소 ${variable.minCoin}코인 이상부터 가능합니다 `);
    }
    console.log('query coin:', coin);
  };
  
  const loadMyCoin = () => { 
    setTotal(myTotalCoin)
   }

  return (
    <Div>
      <div className="coin-setting-group">
        <Input type="button" onClick={loadMyCoin} value={`보유코인: ${total}`} />
        <br/><br />
        <Input type="number" placeholder="지불할 코인" value={Number(`${newCoin}`)} onChange={onChangeCoin} />
        <p className="err-message">{errMessage && errMessage}</p>
      </div>

      <ButtonGroup>
        <em>
          <Link href={'#'}>충전</Link>
        </em>
        <Button onClick={() => queryClient.setQueriesData(['coinVisible'], false)}>취소</Button> &nbsp; &nbsp;
        <Button type="primary" onClick={onclickOk}>

          확인
        </Button>
      </ButtonGroup>
    </Div>
  );
};
