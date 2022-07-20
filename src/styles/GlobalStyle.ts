import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #__next {
    min-height: 100% !important;
    height: 100%;
    box-sizing: border-box;
    background-color: #fcfcfc;//${({ theme }) => theme.color.bg};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;


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
