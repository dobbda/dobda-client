import styled from 'styled-components'
// ({theme})=> theme.color
interface CardProps {
  type?: string,
  color?: string,
}


export const ContentWrapper = styled.div<CardProps>`
  border-bottom: solid 1px #e3e3e3;
  padding: 20px 30px;
	background-color: #fff;
	border-radius: 4px;
	width: 100%;
	filter: drop-shadow(0px 2px 8px rgba(140, 140, 140, 0.25));
  .diff-styles{
    padding-left: 45px;
  }

	@media screen and (max-width:450px) {
		padding: 20px 10px;
	}
`


export const Group = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  //스크롤 방지
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
	height: fit-content;
  p{
    padding:0;
    margin:0;
		margin-right: 5px;
    color: #686868;
    font-size: 12px;
		white-space: nowrap;
  }
  * {
    margin:3px;
    
  }
  svg{
    font-size: 15px;
  }
`


export const P = styled.div`
  font-weight: bold;
  color: ${({color}) => color ? color : "#686868"};
  margin-left: 10px;
`
