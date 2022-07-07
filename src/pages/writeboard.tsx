import React from 'react'
import type { NextPage } from 'next';
import {Write} from 'src/components/Write'
import {Layout} from 'src/components/Layout'

type Props = {}

 const Posting:NextPage = (props: Props) => {
  return (
    <Layout>
     <Write />

    </Layout>
  )
}

export default Posting