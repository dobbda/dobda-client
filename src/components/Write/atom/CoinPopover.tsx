import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { Input as AntInput, Tag } from 'antd';
import { Popover } from 'src/components/common';
import { CoinView } from './CoinView';
import { useClientValue } from 'src/hooks/queryHooks';
import { useQuery, useQueryClient } from 'react-query';
import { CoinIcon, HashIcon } from 'src/assets/icons';

type Props = {};

export const CoinPopover = (props: Props) => {
  const queryClient = useQueryClient();
  const coin = useClientValue('coin', 0);
  const { data: coinVisible } = useQuery('coinVisible', {
    initialData: false,
    staleTime: Infinity,
  });

  const popoverHandler = useCallback(() => {
    queryClient.setQueriesData('coinVisible', true);
  }, [queryClient]);

  return (
    <div>
      {' '}
      <Popover trigger="click" outClick={false} content={<CoinView />} top={30} visible={coinVisible}>

          <Input value={coin} prefix={<CoinFill />} height={48}  onClick={popoverHandler} readOnly />

      </Popover>
    </div>
  );
};

const Input = styled(AntInput)`
  width: 200px;
  height: 48px;
  border-radius: 4px;
  input {
    font-weight: bold;
    color: #8400ec;
  }
`;

const CoinFill = styled(CoinIcon)`
  width: 20px;
  height: 20px;
  color: #f2bc1a;
`;
