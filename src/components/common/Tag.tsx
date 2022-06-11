import React from 'react'
import {TagWord} from './style/Tag.Element'
type Props = {
  children: string,
  color?: string,
  bg?: boolean,
}


export const Tag = ({children, bg}: Props) => {

  const onClicked = ():void => {
    console.log(children)
  }
  return (
    <TagWord onClick={onClicked}  bg={bg}>#{children}</TagWord>
  )
}