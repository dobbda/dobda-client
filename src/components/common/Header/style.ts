import styled from 'styled-components';
import { theme } from 'src/styles/Theme';
import { FcMenu } from 'react-icons/fc';
export const Header = styled.header`
  z-index: 999;
  width: 100%;
  height: fit-content;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: ${({ theme }) => theme.color.header};

  -moz-box-shadow: 0px 0px 4px rgb(137 138 154 / 40%);
  -webkit-box-shadow: 0px 0px 4px rgb(137 138 154 / 40%);
  box-shadow: 0px 0px 4px rgb(137 138 154 / 40%);
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

export const UserModalWrapper = styled.div`
  user-select: none;
  position: relative;
  background-color: #fff;
  width: 150px;
  min-height: 200px;
  padding: 15px 0;
  border-radius: 4px;
  /* border: solid 1px ${theme.color.border3}; */
  box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    cursor: pointer;
    white-space: nowrap;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 9px 10px;
    width: 100%;
    text-align: center;
    transition: all 0.2s;
    svg {
      margin-right: 10px;
    }
    :hover {
      background-color: ${theme.color.prRgb(0.4)};
      color: ${theme.color.secondary};
    }
  }

  .logout_btn {
    position: absolute;
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-color: currentColor;
    bottom: 10px;
    left: 15px;
    color: #8a8a8a;
  }
`;

export const My = styled.button`
  border: solid 1px ${theme.color.primary};
  color: ${theme.color.primary};
  padding: 4px 8px;
  white-space: nowrap;
  background-color: #fff;
  border-radius: 4px;
  font-weight: 600;
  display: flex;
  justify-content: center;

  align-items: center;
  gap: 3px;
`;

export const MobileMemuWrap = styled.div`
  width: 300px;
  background-color: #fff;
  box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
`;

export const LogoWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const MenuIcon = styled(FcMenu)`
  font-size: 28px;
  stroke-width: 0.8%;
  font-weight: bold;
  cursor: pointer;
`;
