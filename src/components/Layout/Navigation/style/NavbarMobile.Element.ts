import { delay } from './../../../../lib/delay';
import styled from 'styled-components';

export const Mobilebar = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.primary};
  height: ${({ theme }) => theme.media.navbarMobiHeight};
  color: #fff;
  padding: 0 12px;
  & > .logo {
    cursor: pointer;
    font-weight: 600;
    font-size: 26px;
    line-height: 40px;
  }
  >* svg {
    transform: scale(0.9);
    cursor: pointer;
  }

  @media screen and (min-width: 786px) {
    height: 0;

  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 60px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
  & > div {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;
