import styled from 'styled-components'
// ({theme})=> theme.color
interface CardProps {
  type?: string,
  color?: string,
}

// export const CardWrapper = styled.li<CardProps>`
//   max-width: 400px;
//   width: 100%;
//   height: 236px;
//   min-width: 340px;
//   background:  ${({type,theme})=> type==="R" ? theme.color.Rcard : theme.color.Qcard};
//   border-radius: 3px;
//   display: flex;
//   flex-direction: column;
  
// `

export const CardContainer = styled.li<CardProps>`
  background:  ${({type,theme})=> type==="R" ? theme.color.Rcard : theme.color.Qcard};
  /* max-width: 100%; */
  width: 100%;
  max-width:${({theme})=> theme.media.cardMaxWidth};
  min-width: ${({theme})=> theme.media.cardMinWidth};
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
    color: ${({color}) => color ? color : "#686868"};
  }
  * {
    margin:3px;
    font-size: 15px;
  }
`


export const P = styled.div`
  color: #000;
`

export const AddBell = styled.div`
  cursor: pointer;
  :hover {
    transform: scale(1.3);
    transition: all 0.3s;
  }
  
`