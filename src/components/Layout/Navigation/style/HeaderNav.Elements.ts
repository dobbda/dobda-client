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
  background-color: #f4faff ;//${({ theme }) => theme.color.primary};
	border-bottom: solid 1px #cacaca;
	p{
		margin: 0;
	}
`;

export const Headercontainer = styled.div`
  /* overflow: hidden; */
  margin: auto;
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  height: ${({ theme})=> theme.media.headerHeight};
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
background-color: #4c42e1;
    cursor: pointer;
    padding: 3px 10px 5px 13px;
    border: 1px solid #fbfbfb;
    height: 28px;
    border: solid 1px #fbfbfb;
    border-radius: 1em;
    font-weight: bold;
	color: #fff;
    a{
      padding:0;
    }
`