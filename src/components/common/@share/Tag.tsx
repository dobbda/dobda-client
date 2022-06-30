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
  margin: auto 3px;
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  border-radius: 5px;
  background-color: ${({theme,bg})=>bg && theme.color.secondary };
  color: ${({theme,bg})=> bg?"#fff":theme.color.secondary};
  cursor:pointer;
  :hover {
    color:#00C6FF;
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
