import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { Write_Wrapper, EnrQorl, Label, Group, Check, Tags } from './style/write.element';
import { Select, DatePicker, DatePickerProps, Input as AntInput, Tag } from 'antd';
import { Popover } from 'src/components/common';
import { CoinView } from './CoinView';
import { useClientValue } from 'src/hooks/queryHooks';
import { useQuery, useQueryClient } from 'react-query';
import { RiBitCoinFill, BiHash } from 'src/assets/icons';
import { Hashtags } from './Hashtags';

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
      <Popover trigger="click" outClick={false} content={<CoinView />} top={10} visible={coinVisible}>
        <div onClick={popoverHandler}>
          <Input value={coin} prefix={<CoinFill />} height={48} readOnly />
        </div>
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

const CoinFill = styled(RiBitCoinFill)`
  width: 20px;
  height: 20px;
  color: #f2bc1a;
`;
