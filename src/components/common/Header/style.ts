import { Text } from './../../SocialLogin/style/LogoBtn.style';
import { logout } from './../../../api/apis/user';
import styled from 'styled-components';
import { Button } from 'antd';
import { theme } from 'src/styles/Theme';
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
  border: solid 1px ${theme.color.text1(0.1)};
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
    border-bottom: solid 1px ${theme.color.text1(0.1)};
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
    text-decoration-color: #8a8a8a;
    bottom: 10px;
    left: 50px;
    color: #8a8a8a;
  }
`;

export const My = styled.button`
  border: solid 1px ${theme.color.primary};
  color: ${theme.color.primary};
  padding-top: 4px;

  background-color: #fff;
  border-radius: 4px;
  font-weight: bold;
  line-height: 20px;
  font-size: 12px;
`;
