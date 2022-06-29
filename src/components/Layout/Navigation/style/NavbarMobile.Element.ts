import { delay } from './../../../../lib/delay';
import styled from 'styled-components';


export const Mobilebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.primary};
  height: ${({ theme }) => theme.media.navbarMobiHeight};
  padding: 0 15px 0 10px;

  >* svg {
    transform: scale(0.9);
    cursor: pointer;
  }

  @media screen and (min-width: 789px) {
    overflow: hidden;
    height: 0;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

