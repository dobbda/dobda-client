import styled from 'styled-components';
// height: ${({theme})=>theme.media.size};
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme})=>theme.color.bg};
  
  .wrapper {
    max-width: ${({ theme }) => theme.media.large}; //1200px
    height: 100%;

    display: flex;
    flex-direction: column;

    .tablet-nav {
      z-index: 1;
      display: none;
      height: 40px;
      background: #00c6ff;
      
      @media screen and (max-width: ${({ theme }) => theme.media.medium}) and (min-width: ${({ theme }) => theme.media.small}) {
        display: block;
      }
    }

    .mobile-nav {
      z-index: 1;
      height: 40px;
      background: #00c6ff;

      display: none;
      @media screen and (max-width: ${({ theme }) => theme.media.small}) {
        display: block;
      }
    }

    .main {
      //윈도우 메인화면
      display: flex;
      justify-content: space-between;
      height: 100%;
      .layout-content {
        width: 100%;
      }
      .window-nav {
        z-index: 1;
        height: 100vh;
        width: 200px;
        background-color: #00c6ff;
        @media screen and (max-width: ${({ theme }) => theme.media.medium}) {
          display: none;
        }
      }
    }

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
`

export const Footer = styled.footer`
    position: relative;
    bottom: 0;
    left: 200px;
    background: red;
    height: 100px;
    width: 100%;
    @media screen and (max-width: ${({ theme }) => theme.media.large}){
      left: 0;
    }

`