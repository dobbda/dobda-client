import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.color.bg};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;
    #__next{
      height: 100%;
    }
  }
  /* .ant-popover-inner-content{padding:0}; */
  a {
    color: inherit;
  }

  * {
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
  }

 h1,h2,h3{
    margin: 0;
  }

  .navbar-dropdown {
    top: 40px !important;
  }
  
`;
