import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

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
