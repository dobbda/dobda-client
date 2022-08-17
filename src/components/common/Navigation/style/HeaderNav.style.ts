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
  .headerWrapper{

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
	justify-content: center;
  gap: 10px;
`;

export const Btn = styled.button`
		background-color: #FFFFFF;
    cursor: pointer;
    padding: 3px 10px 5px 13px;
    border: 1px solid #717171;
    height: 28px;
    border-radius: 1em;
    font-weight: bold;
    white-space: nowrap;

	color: #000;
    a{
      padding:0;
    }
`