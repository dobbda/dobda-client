import { theme } from 'src/styles/Theme';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #__next {
    box-sizing: border-box;
		margin: 0 ;
		padding:0;
	}
	body{
    background-color: ${theme.color.bg};
		font-family: "Helvetica Neue", "Noto Sans KR", Inter, Helvetica, sans-serif;
    font-size: 14px;
  }

	.ant-popover-inner-content{
			padding:5px ;
		}

  .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    color: #fff;
    background: #000;
    border-color: #000;
	}


	a, a:hover, a:focus, a:active {
     text-decoration: none;
     color: inherit;
 }

  * {
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
  }


 h1,h2,h3,p{
    margin: 0;
  }

  .navbar-dropdown {
    top: 40px !important;
  }
  
	button {
		cursor: pointer;
	}
`;
