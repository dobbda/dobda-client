import React from 'react';
import { Popover } from 'src/components/common';
import { Tipi } from 'src/icons';
import { theme } from 'src/styles/Theme';
import styled from 'styled-components';

type Props = {
  content: string;
};

export const Tips = ({ content }: Props) => {
  return (
    <>
      <Popover trigger="hover" bottom={3} left={0} content={<Message>{content}</Message>} right={0}>
        <Tipi css={{ color: theme.color.text1(0.5) }} />
      </Popover>
    </>
  );
};

const Message = styled.span`
  background-color: #363636;
  color: #fff;
  min-width: 200px;
  display: block;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
`;
