import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'


const  coinhistory: NextPage=()=> {
  return (
    <div>coinhistory
      <p><Link href='/payment/deposit' passHref>충전하기</Link></p>
      <h3><Link href='/payment/withdrawal' passHref>충전하기</Link></h3>
    </div>
  )
}

export default coinhistory