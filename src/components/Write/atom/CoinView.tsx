import React, { useState, useEffect, Dispatch, useCallback } from 'react';
import Link from 'next/link';
import { Div } from './style/inputCoinPopover.element';
import {Input as AntInput } from 'antd';
import { variable } from 'src/config/defaultValue';
import styled from 'styled-components';
type Props = {
	coin:number,
	setCoin: React.Dispatch<React.SetStateAction<number>>
};

export const CoinView = ({coin, setCoin}:Props) => {
  const [errMessage, setErrMessage] = useState('');
  const myTotalCoin = 100000;
	
  const onChangeCoin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoin(Number(`${e.target.value}`));
  };

  useEffect(() => {
		setErrMessage('')
    if (coin >= variable.minCoin) {
      coin > myTotalCoin && setErrMessage('보유코인이 부족합니다');
    } else {
      setErrMessage(`최소 ${variable.minCoin}코인 이상부터 가능합니다 `);
    }
  },[coin]);
  
  return (
    <Div>
      <div className="coin-setting-group">
        <Input type="number" placeholder="지불할 코인" value={coin} onChange={onChangeCoin} />
			<div className="coin-data"><Link href='#'>충전하기</Link> <span>보유코인: {myTotalCoin}</span> </div>

        <p className="err-message">{errMessage && errMessage}</p>
      </div>
    </Div>
  );
};

const Input = styled(AntInput)`
	color: #8400EC; 
	font-weight: bold

`