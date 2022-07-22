import styled from 'styled-components';
import { Button } from 'antd';
export const Header = styled.header`
  z-index: 999;
  width: 100%;
  height: fit-content;
  position: static;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: ${({ theme }) => theme.color.primary};

  .headerWrapper{

  }
`;

export const Mobilebar = styled.div`
  /* overflow: hidden; */
  margin: auto;
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  height: 50px;
  padding: 0 10px;
  > * svg {
    transform: scale(0.8);
    cursor: pointer;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Btn = styled.button`
    padding: 3px 10px 5px 13px;
    border: 1px solid #fbfbfb;
    height: 28px;
    border: solid 1px #fbfbfb;
    border-radius: 1em;
    font-weight: bold;
    a{
      padding:0;
    }
`