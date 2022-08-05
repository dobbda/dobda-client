import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #__next {
    min-height: 100% !important;
    height: 100%;
    box-sizing: border-box;
    background-color: #f8f9fa;//${({ theme }) => theme.color.bg};
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

			.toastui-editor-toolbar{
				background-color: #fff;
				border-bottom: 1px solid #dadada;
			}
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
