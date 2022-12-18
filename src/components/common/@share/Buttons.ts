import React from 'react';
import styled, { css, CSSProperties } from 'styled-components';
import { theme } from 'src/styles/Theme';
import { ButtonProps, ButtonType } from 'antd/lib/button';

interface Props {
  types?: 'primary' | 'secondary' | 'secondary' | 'danger' | 'black';
  color?: string;
  $block?: boolean;
  $fill?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}

const color = {
  danger: '#ad0000',
  primary: theme.color.primary,
  secondary: theme.color.secondary,
  black: '#000000cf',
};

export const Button = styled.button<Props>`
  background-color: ${({ types, $fill }) => ($fill ? color[types || 'primary'] : 'rgba(0,0,0,0)')};
  color: ${({ types, $fill }) => ($fill ? '#fff' : color[types || 'primary'])};
  border: 1px solid ${({ types }) => color[types || 'primary']};
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  white-space: nowrap;
  user-select: none;
  transition: all 0.2s ease-in-out 0s;
  padding: 5px 20px;
  display: ${({ $block }) => ($block ? 'block' : 'inline-block')};
  margin: ${({ $block }) => $block && '0 auto'};
  :hover {
    box-shadow: ${theme.color.prRgb(0.5) + '0px 0px 0px 2px'};
  }
  pointer-events: ${(props) => (props.disabled ? 'none' : null)};
`;
