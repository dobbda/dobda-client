import React from 'react';
import { TagClosei } from 'src/icons';
import styled from 'styled-components';

type Props = {
  children: string | React.ReactNode;
  closable?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  bg?: string;
  color?: string;
};

interface StyleProps {
  color?: string;
  bg?: string;
}

const Div = styled.div<StyleProps>`
  font-size: 12px;
  background-color: ${({ bg }) => (bg ? bg : `rgba(214, 219, 228, 0.5)`)};
  color: ${({ theme }) => theme.color.text1(0.6)};
  padding: 4px 10px;
  border-radius: 4px;
  span {
    cursor: pointer;
    text-align: center;
    margin-right: -5px;
    margin-left: 5px;
    svg {
      padding-top: 3px;
      font-size: 15px;
    }
  }
`;

export const Tag = ({ children, closable, onClose, bg, color }: Props) => {
  return (
    <Div bg={bg} color={color}>
      {children}{' '}
      {closable && (
        <span onClick={onClose}>
          <TagClosei />
        </span>
      )}
    </Div>
  );
};
