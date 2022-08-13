import React from 'react'
import styled from 'styled-components'


type Props = {
  children: string,
  color?: string,
  bg?: boolean,
}

interface StyleProps {
  color?: string,
  bg?: boolean,
}

const Div = styled.div<StyleProps>`

  padding: ${({bg})=>bg && "0 8px 3px"} ;
  font-size: 12px;
  background-color: ${({bg})=>bg && "rgba(0, 87, 255, 0.08);" };
  color: ${({theme})=> theme.color.secondary};
	padding: 2px 10px;
  cursor:pointer;
  :hover {
    color:#000888;
  }
  `

export const Tag = ({children, bg}: Props) => {

  const onClicked = ():void => {
    console.log(children)
  }
  return (
    <Div onClick={onClicked}  bg={bg}>{!bg && "#"}{children}</Div>
  )
}
