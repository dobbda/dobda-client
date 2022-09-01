import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import { Button as antButtn } from 'antd';
interface Props {
  border?: boolean;
  types?: 'cancel' | 'ok';
  style?: CSSProperties;
}

export const Button = styled(antButtn)<Props>`
  background-color: ${({ types }) => (types === 'cancel' ? 'rgba(255, 255, 255, 0.1)' : '#0057FF')};
  color: ${({ types }) => (types === 'cancel' ? '#000' : '#fff')};
  border: 1px solid ${({ types }) => (types === 'cancel' ? '#ACACAC' : '#0057FF')};
  padding: 2px 20px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  ${({ css }) => css && { ...css }};
  :hover {
    color: ${({ types }) => (types === 'cancel' ? '#9e08da' : '#d5fdc2')} ;
		background-color: ${({ types }) => types ? '#fff' : '#0057FF'};

  }
`;
