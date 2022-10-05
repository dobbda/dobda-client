import React from 'react';
import { Popover } from 'src/components/common';
import { i } from 'src/icons';
import { theme } from 'src/styles/Theme';
import styled from 'styled-components';

type Props = {};

export const Tips = () => {
  return (
    <>
      <Popover trigger="hover" bottom={3} content={<Message>메이커 선택 완료시 현재 입력된 금액을 결제합니다</Message>} right={0}>
        <i.Tip css={{ color: theme.color.text1(0.5) }} />
      </Popover>
    </>
  );
};

const Message = styled.span`
  background-color: #363636;
  color: #fff;
  width: 200px;
  display: block;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
`;
