import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import { Spin, Button as antButtn } from 'antd';
import { theme } from 'src/styles/Theme';

interface Props {
  border?: boolean;
  cancel?: boolean;
  style?: CSSProperties;
  loading?: boolean;
}

export const Button = styled.button<Props>`
  background-color: ${({ cancel }) => (cancel ? `rgba(0,0,0,0)` : theme.color.primary)};
  color: ${({ cancel }) => (cancel ? theme.color.primary : '#fff')};
  border: 1px solid ${({ cancel }) => (cancel ? `${theme.color.primary}` : 'rgba(0,0,0,0)')};
  padding: 4px 20px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  user-select: none;
  :hover {
    box-shadow: ${theme.color.prRgb(0.4)} 0px 0px 0px 3px;
  }
`;
