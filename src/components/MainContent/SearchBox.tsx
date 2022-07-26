import React from 'react'
import {Div} from './style/SearchBox.Element'
import {SearchIcon} from 'src/assets/icons'
type Props = {}

const SearchBox = (props: Props) => {
  return (
    <Div className="search-box">
      <input type="text" placeholder="태그검색" />
      <button><SearchIcon/></button>
  </Div>
  )
}

export default SearchBox
