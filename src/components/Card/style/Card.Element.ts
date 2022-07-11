import styled from 'styled-components'
// ({theme})=> theme.color
interface CardProps {
  type?: string,
  color?: string,
}


export const ContentWrapper = styled.li<CardProps>`
  margin-top:10px;
  border-bottom: solid 1px #D3D3D3;
  .diff-styles{
    padding-left: 45px;
  }
`


export const Group = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  //스크롤 방지
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;

  p{
    color: #686868;
  }
  * {
    margin:3px;
    font-size: 15px;
  }
`


export const P = styled.div`
  font-weight: bold;
  color: ${({color}) => color ? color : "#686868"};
  margin-left: 10px;
`
