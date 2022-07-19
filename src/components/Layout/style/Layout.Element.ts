import styled from 'styled-components';
// height: ${({theme})=>theme.media.size};
const padding = ""
type Props = {
  paddingLeft?:boolean
}
export const Container = styled.div<Props>`
  height: 100%;
  display: flex;
  .navigation-caontainer{
    z-index: 111;
    position: relative;
    min-width:${({ theme }) => theme.media.navbarWidth} ;
    @media screen and (max-width: 788px) {
      width: 0;
      min-width: 0;
      margin-top: ${({ theme }) => theme.media.navbarMobiHeight};
    }
  }

  .main-wrapper {
    position: relative;
    width: 100%;
    max-width: 800px;
    height: 100%;
    @media screen and (max-width: 788px) {
      margin-top: ${({ theme }) => theme.media.navbarMobiHeight};

    }
  }

  .layout-content{
    padding:10px;
    /* padding-left: 20px; */
    padding-left: ${({paddingLeft})=> paddingLeft ? "10px" : 0};
    min-width: 350px;
    height: 100%;
    @media screen and (max-width: 788px){
      padding: 0;
      /* padding-top: 20px; */
      transition: all 0.2s;
  }
  }
`;

