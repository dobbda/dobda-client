import React from 'react'
import {Div} from './style/SearchBox.Element'
import {SearchIcon} from 'src/assets/icons'
import styled from 'styled-components'
type Props = {}

const SearchBox = (props: Props) => {
  return (
    <Div className="search-box">
      <input type="text" placeholder="태그검색" />
      <button><Shearch/></button>
  </Div>
  )
}

export default SearchBox

const Shearch = styled(SearchIcon)`
	height: 18px;
	width: 18px;
`
