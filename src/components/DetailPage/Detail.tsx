import React from 'react'

import {Tag} from '../common/Tag'
import {
  PostContainer, 
  ContentWrapper, 
  ContentHeader,
  ContentDetail, 
  CommentWrapper,
  CoinWrapper,
  TagWrapper } 
from './style/Detail.Element'
import Coin from '../icon/svg/coin.svg'



type Props = {
  children?: React.ReactElement // commentComponent
}

const Detail = ({children}: Props) => {
  return (
    <PostContainer>
      <ContentWrapper>
        <ContentHeader>
          <h1 className='content-title'>apple system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Canta</h1>
          <TagWrapper><Tag>python</Tag> <Tag>java</Tag> <Tag>matlab</Tag></TagWrapper> {/* map tags*/}
          <div className='deadline'>마감기한: {"2022-12-12"} </div>
          <CoinWrapper>코인: <p>9999</p><Coin/> </CoinWrapper>
          <div className='createdAt'>createdAt: {"2022-12-12/12:24"}</div>
        </ContentHeader>

        <ContentDetail>
        
          <h3>markdown viewer components</h3>
        </ContentDetail>

      </ContentWrapper>

      <input type="text" placeholder="임시 input form" className='comment-form'/>

      <CommentWrapper >
        
        <h1>comment components {children}</h1>
        
      </CommentWrapper>

    </PostContainer>
  )
}

export default Detail