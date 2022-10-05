import styled from 'styled-components';
import { Button } from 'antd';
export const Header = styled.header`
  z-index: 999;
  width: 100%;
  height: fit-content;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  opacity: 0.95;
  background-color: ${({ theme }) => theme.color.header};

  -moz-box-shadow: 0 5px 4px rgb(137 138 154 / 40%);
  -webkit-box-shadow: 0 5px 4px rgb(137 138 154 / 40%);
  box-shadow: 0 5px 4px rgb(137 138 154 / 40%);
  .headerWrapper {
  }
`;

export const Headercontainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.media.maxWidth};
  height: ${({ theme }) => theme.media.headerHeight};
  padding: 0 10px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  * > span {
    cursor: pointer;
  }
`;
