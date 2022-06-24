import styled from 'styled-components';
// height: ${({theme})=>theme.media.size};
export const Container = styled.div`
  max-width:${({theme})=>theme.media.large}; //navbar + content  = 1080px (+side banner)=(1300px), 
  
  .wrapper {
    position: relative;
    margin-left: ${({ theme }) => theme.media.navbarWidth};
    height: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: ${({ theme }) => theme.media.medium}) {
      
      margin:0;
      margin-top:40px;
      .window-nav{display:none}
      .tablet-nav{ display:block}
    }
  }
  .main {
    //윈도우 메인화면
    display: flex;
    justify-content: space-between;
    .layout-content {
      /* width: 100%; */
    }
  }

  .window-nav {
    z-index: 999;
    position: relative;
    display: block;
  }

  .tablet-nav { //small width size
    z-index: 999;
    position: relative;
    display: none; 
  }

`;

export const Banner = styled.aside`
  position: fixed;
  left: ${({ theme }) => theme.media.large};
  top: 50px;
  max-width: 180px;
  min-width: 180px;
  height: 500px;
  border: 1px solid #0005;
`;


