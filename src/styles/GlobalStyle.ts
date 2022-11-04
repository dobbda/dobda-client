import { theme } from 'src/styles/Theme';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #__next {
    box-sizing: border-box;
		margin: 0 ;
		padding:0;
		height: auto;
	}
	body{
    background-color: ${theme.color.bg};
		-webkit-text-size-adjust: none;
		font-family:  "Helvetica Neue", Helvetica,'Noto Sans KR', sans-serif,  Inter ;
    font-display: fallback;
		font-size: 14px;
		overflow-y: scroll;

		::-webkit-scrollbar {
			width: 10px;
			background-color: #e7e7e7;
		}
		::-webkit-scrollbar-thumb {
			background: #a7a7a7;
			border-radius: 1rem;
		}
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
		 cursor: pointer;
 }

  * {
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
  }

  .navbar-dropdown {
    top: 40px !important;
  }
  
	button {
		cursor: pointer;
	}

`;
