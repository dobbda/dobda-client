import React from 'react';
import { TagClosei } from 'src/icons';
import styled from 'styled-components';
import { TagColorKey, tagColors, TagColorType } from '../color';

type Props = {
  children: string | React.ReactNode;
  closable?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  color?: TagColorType;
  random?: boolean;
};

const Div = styled.div`
  font-size: 12px;
  color: rgb(85, 89, 105);
  padding: 3px 10px;
  border: solid 1px #d3adf7;
  background-color: '#d3adf710';
  border-radius: 10px;

  span {
    text-align: center;
    margin-right: -5px;
    margin-left: 5px;
    svg {
      padding-top: 3px;
      font-size: 15px;
      cursor: pointer;
    }
  }
`;

const Tag = ({ children, closable, onClose, color, random }: Props) => {
  return (
    <Div css={tagColors[color]}>
      {children}{' '}
      {closable && (
        <span onClick={onClose}>
          <TagClosei />
        </span>
      )}
    </Div>
  );
};

export default Tag;
