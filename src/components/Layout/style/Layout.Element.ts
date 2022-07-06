import styled from 'styled-components';
// height: ${({theme})=>theme.media.size};
export const Container = styled.div`
  .layout-container {
    /* position: relative; */
    width: 1280px;
    display: flex;
    flex-direction: column;
  }
  .main {
    position: relative;
    top: 0;
    bottom: 0;
    left: ${({ theme }) => theme.media.navbarWidth};
    max-width: 800px;

    @media screen and (max-width: ${({ theme }) => theme.media.tablet}) {
      left: 0;
      margin-top: 60px;
    }
  }
  nav{
    z-index: 111;
    position: relative;
  }

  .layout-content{
    padding:10px;
    padding-left: 20px;
    min-width: 350px;

    @media screen and (max-width: 786px){
      padding:5px;
      /* padding-top: 20px; */
      transition: all 0.2s;
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
`;
