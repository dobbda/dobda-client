import React from 'react'
import styled from 'styled-components'

interface Props {
  color?: string,
  border?: boolean,
}
export const Button = styled.button<Props>`
  border: none;
  background-color: ${({color})=>color ? color : "#0088FF"};
  border-radius: 10px;
  min-width: 100px;
  height:22px;
  letter-spacing: 0.18em;

  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #FFFFFF;

  cursor: pointer;
  :hover{
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    transform: scale(1.01);
  }
`


// export const Button = (props: Props) => {
//   return (
//     <div>Buttons</div>
//   )
// }
