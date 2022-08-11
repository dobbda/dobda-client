import styled from 'styled-components';
interface Props {
  type?: string;
  selected?: boolean;
  acceped_answer?: boolean;
}

const wrapperPadding = "25px";
export const CommentWrapper = styled.div<Props>`
	background-color: #fff;
	border: 1px solid #D9D9D9;
	border-radius: 4px;
  filter: drop-shadow(0px 2px 10px rgba(168, 168, 168, 0.25));

`;

export const ChildView = styled.div`
	border: 1px solid #D9D9D9;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
	margin:-1px;
	height: 40px;
	padding: 0 40px;
  .show-replybtn {
    display: flex;
    align-items: center;
    text-align: center;
		span{
			margin: 0 10px;
			margin-bottom: 3px;;
			font-weight: 500;
			text-align: center;
		}
  }
  
`;

export const Viewer = styled.div<Props>`
    background-color: #fff;
    padding: 0 25px 25px;
  
`;

export const Header = styled.div<Props>`
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .gc-left {
    display: flex;
    align-items: center;
  }

  .gc-right{
    display: flex;
    align-items : center;
    span{
      color: #656565;
      margin-right: 20px;
      font-weight: bold;
      border: 1px solid #cacaca;
      padding: 0 6px 0 10px;
      border-radius: 5px;
      :hover {
        color: #28DA84;
      }
    }
    > * {cursor: pointer;}
  }
`;

export const CommentEditor = styled.div`
	padding: 8px;
`
