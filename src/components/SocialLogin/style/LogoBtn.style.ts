import styled from 'styled-components';
import { css } from 'styled-components';

type Props = {
  bg: string;
  color: string;
};

export const Text = styled.span`
  margin-left: 20px;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Item = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 28px 12px 28px;
  word-break: keep-all;
  overflow: hidden;
`;

export const Wrap = styled.button<Props>`
  cursor: pointer;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0.5px 1px 0px rgba(0, 0, 0, 0.1);

  border-radius: 2rem;
  border: 1.5px solid #dee2e6;
  :hover {
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.5);
  }
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
`;
