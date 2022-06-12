import React from 'react'
import moment from "moment";
import "moment/locale/ko";

import {Tag} from '../common/Tag'
import {
  PostContainer, 
  ContentWrapper, 
  ContentHeader, 
  CommentContainer,
  CoinWrapper,
  TagWrapper,
  ContentView, 
  } 
from './style/Detail.Element'
import Coin from '../icon/svg/coin.svg'

import {QComment, RComment} from './Comment/'

type Props = {
  children?: React.ReactElement // commentComponent
}

const QDetail = ({children}: Props) => {
  return (
    <PostContainer>
      <ContentWrapper>
        <ContentHeader>
          <h1 className='content-title'>apple system, BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu, Canta</h1>
          <TagWrapper><Tag  bg={true}>python</Tag> <Tag bg={true}>java</Tag><Tag>java</Tag><Tag>java</Tag> <Tag>matlab</Tag></TagWrapper> {/* map tags*/}
          <div className='deadline'>마감기한: {moment("2021-10-09T00:44:52+09:00").format('YYYY-MM-DD HH:mm:ss')} </div>
          <CoinWrapper>코인: <p>9999</p><Coin/> </CoinWrapper>
          <div className='createdAt'>createdAt: {moment("2021-10-09T00:44:52+09:00").format('YYYY-MM-DD HH:mm:ss')}</div>
        </ContentHeader>

        <ContentView>
        
          <h3>markdown viewer components</h3>
        </ContentView>

      </ContentWrapper>

      <input type="text" placeholder="임시 input form" className='comment-form'/>

      <CommentContainer >
        <QComment acceped_answer={true}/>
        <QComment/>
        <QComment/>
        <QComment/>
      </CommentContainer>

    </PostContainer>
  )
}

export default QDetail