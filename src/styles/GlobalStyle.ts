import { theme } from 'src/styles/Theme';
import { createGlobalStyle, css } from 'styled-components';

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
		/* font-family:  "Helvetica Neue", Helvetica,'Noto Sans KR', sans-serif,  Inter ; */
		font-family: Pretendard, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-display: fallback;
		font-size: 14px;
		overflow-y: scroll;

		::-webkit-scrollbar {
			width: 10px;
      height: 10px;
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

  
	button {
		cursor: pointer;
	}
`;
