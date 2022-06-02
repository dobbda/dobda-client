import styled from 'styled-components';
// height: ${({theme})=>theme.media.size};
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  .wrapper {
    max-width: ${({ theme }) => theme.media.maxWidth}; //1200px
    height: 100%;
    background: #0005;

    display: flex;
    flex-direction: column;

    .tablet-nav {
      display: none;
      height: 40px;
      background: #00c6ff;

      @media screen and (max-width: ${({ theme }) => theme.media.medium}) and (min-width: ${({ theme }) => theme.media.small}) {
        display: block;
      }
    }

    .mobile-nav {
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
      & > .content {
        width: 100%;
        height: 100%;
        background-color: #fff;
      }
      .window-nav {
        //사이드 내비게이션
        height: 100vh;
        width: 200px;
        background-color: #00c6ff;
        @media screen and (max-width: ${({ theme }) => theme.media.medium}) {
          display: none;
        }
      }
    }

    aside {
      //오른쪽 사이드바
      max-width: 180px;
      min-width: 180px;
      height: 500px;
      background: #0005;
      @media screen and (max-width: ${({ theme }) => theme.media.large}) {
        display: none;
      }
    }
  }

  footer {
    background: red;
    height: 180px;
    max-width: ${({ theme }) => theme.media.maxWidth};
  }
`;
