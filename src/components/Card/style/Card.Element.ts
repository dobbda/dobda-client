import { blob } from 'stream/consumers'
import styled from 'styled-components'
// ({theme})=> theme.color
interface CardProps {
  type?: string,
  color?: string,
}


export const CardContainer = styled.li<CardProps>`
  background:  ${({theme})=> theme.color.card};

  /* max-width:${({theme})=> theme.media.cardMaxWidth}; */
  min-width: 300px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  display: inline-block;
`
 export const CardWrapper = styled.div`
   display: flex;
   flex-direction: column;
 `


export const Group = styled.div`
  display: flex;
  align-items: center;
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

export const AddBell = styled.div`
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }
  
`