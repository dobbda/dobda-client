import styled from 'styled-components';
// height: ${({theme})=>theme.media.size};
const padding = ""
export const Container = styled.div`
  height: 100%;
  display: flex;
  .navigation-caontainer{
    z-index: 111;
    position: relative;
    min-width:${({ theme }) => theme.media.navbarWidth} ;
    @media screen and (max-width: 788px) {
      width: 0;
      min-width: 0;
      margin-top: 60px;
    }
  }

  .main-wrapper {
    position: relative;
    max-width: 800px;
    height: 100%;
    @media screen and (max-width: 788px) {
      margin-top: 60px;
    }
  }

  .layout-content{
    padding:10px;
    padding-left: 20px;
    min-width: 350px;

    @media screen and (max-width: 788px){
      padding: 0;
      /* padding-top: 20px; */
      transition: all 0.2s;
  }
  }
`;

