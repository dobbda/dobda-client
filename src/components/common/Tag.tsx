import React from 'react'
import {TagWord} from './style/Tag.Element'
type Props = {
  children: string,
  color?: string,
}


export const Tag = ({children, color}: Props) => {

  const onClicked = ():void => {
    console.log(children)
  }
  return (
    <TagWord onClick={onClicked}  color={color}>{children}</TagWord>
  )
}