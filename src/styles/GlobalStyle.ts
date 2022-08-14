import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #__next {
    /* min-height: 100% !important; */
		height: fit-content;
    box-sizing: border-box;
		margin: 0 ;
		padding:0;
    background-color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;

    .toastui-editor-defaultUI-toolbar,
		.toastui-editor-md-tab-container,
		.toastui-editor-toolbar-icons
		{
      background-color: rgba(0,0,0,0);
			border:none;
    }
    .toastui-editor-defaultUI{
      border:1px solid #dadada;
      border-radius: 0;
      background: #fff;
			h1,h2,h3,h4,h5,h6{
				margin:5px 0 2px;
				border-bottom: none;
			}
			.toastui-editor-toolbar{
				background-color: #fff;
				border-bottom: 1px solid #dadada;
			}
    }
		.toastui-editor-contents h1,h2,h3{
			border:none;
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
