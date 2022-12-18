import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { TagClosei } from 'src/icons';
import styled from 'styled-components';
import { TagColorKey, tagColors, TagColorType } from '../color';

type Props = {
  children: string;
  closable?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  color?: TagColorType;
  random?: boolean;
  clickEvent?: boolean;
};

const Div = styled.div`
  font-size: 12px;
  color: rgb(85, 89, 105);
  padding: 3px 10px;
  border: solid 1px #d3adf7;
  background-color: '#d3adf710';
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: default;
  span {
    text-align: center;
    svg {
      padding-top: 3px;
      font-size: 15px;
      cursor: pointer;
    }
  }
`;

const Tag = ({ children, closable, onClose, color, random, clickEvent }: Props) => {
  const router = useRouter();
  const onClick = useCallback(() => {
    router.push({ pathname: router.locale, query: { ...router.query, keyword: children } });
  }, []);

  return (
    <>
      {clickEvent ? (
        <Div css={{ ...tagColors[color], cursor: 'pointer' }} onClick={onClick}>
          {children}
        </Div>
      ) : (
        <Div css={tagColors[color]}>
          {children}
          {closable && (
            <span onClick={onClose}>
              <TagClosei />
            </span>
          )}
        </Div>
      )}
    </>
  );
};

export default Tag;
