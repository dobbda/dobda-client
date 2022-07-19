import React from 'react'
import { NextPage } from 'next'

import { Layout } from 'src/components/Layout'
import {MyPost} from 'src/components/MyPoster'
const PosterList: NextPage=()=> {
  return (
    <Layout paddingLeft={false}>
      <MyPost/>
    </Layout>
  )
}

export default PosterList