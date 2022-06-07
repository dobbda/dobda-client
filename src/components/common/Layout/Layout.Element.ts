import styled from 'styled-components';
// height: ${({theme})=>theme.media.size};
export const Container = styled.div`
  max-width:${({theme})=>theme.media.large}; //navbar + content  = 1080px (+side banner)=(1300px), 
  
  .wrapper {
    position: relative;
    margin-left: 200px;
    max-width: 1000px; 
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
    width: 200px;
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    display: block;
  }

  .tablet-nav {
    z-index: 999;
    position: fixed;
    top:0;
    left:0;
    right:0;
    display: none;
    height:40px;
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


