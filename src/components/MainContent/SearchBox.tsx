import React from 'react'
import {Div} from './style/SearchBox.Element'
import Enter from '../icon/svg/enter.svg'
type Props = {}

const SearchBox = (props: Props) => {
  return (
    <Div className="search-box">
      <input type="text" placeholder="태그검색" />
      <button><Enter/></button>
  </Div>
  )
}

export default SearchBox
