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
    background-color: #f3f4f8;
		font-family: "Noto Sans KR", "Titillium Web", "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", sans-serif;
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
		.ant-popover-inner-content{
			padding:5px ;
		}
  }


  .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    color: #fff;
    background: #000;
    border-color: #000;
	}


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
