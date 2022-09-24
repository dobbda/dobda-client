import React from 'react';
import { TagCloseIcon } from 'src/assets/icons';
import styled from 'styled-components';

type Props = {
  children: string;
  closable?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  bg?: string;
};

interface StyleProps {
  color?: string;
  bg?: string;
}

const Div = styled.div<StyleProps>`
  font-size: 12px;
  background-color: ${({ bg }) => (bg ? bg : `rgba(214, 219, 228, 0.5)`)};
  color: ${({ theme }) => theme.color.secondary};
  padding: 2px 10px;
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

export const Tag = ({ children, closable, onClose, bg }: Props) => {
  return (
    <Div bg={bg}>
      {!bg && '# '}
      {children}{' '}
      {closable && (
        <span onClick={onClose}>
          <TagCloseIcon />
        </span>
      )}
    </Div>
  );
};
