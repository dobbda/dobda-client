import styled from 'styled-components';
interface StyleProps {
  mobileOn: any;
}
export const Navheader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.media.navbarMobiHeight};
  background-color: ${({ theme }) => theme.color.primary};
  box-shadow: 0px 2px 2px #4c42e1;
  margin-bottom: 28px;

  .display-none{
    cursor: pointer;
    position: relative;
    right: -45px;
    transform:scale(1.3);
    color: #4c42e1;
    :hover{
      color: #fff;
    }
    
  }
`

export const LayerMask = styled.div<StyleProps>`
  display: ${({mobileOn }) => mobileOn ? `block`: `none`};
  z-index: 111;
  position:fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #00000073;
`

export const SideNav = styled.div<StyleProps>`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.color.secondary};
  width: ${({ theme }) => theme.media.navbarWidth};
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
   .navigation-wrapper{
    height: 100%;
   }
  @media screen and (max-width: 788px) {
    width: 0;
    transition: all 0.3s;
    width: ${({ mobileOn, theme }) => (mobileOn ? theme.media.navbarWidth : 0)};

  }

  z-index: 111;

`;

