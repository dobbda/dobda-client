import React,{useState, useEffect} from 'react';
import type { NextPage } from 'next';
import {MessageBox} from 'src/components/MessageBox/MessageBox';
import {Popover} from 'src/components/common';
import { SocialLogin} from 'src/components/SocialLogin'
import {Layout} from 'src/components/Layout'
type Props = {}
const client_id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

const Test:NextPage = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const closed = () => {
    setVisible(false)
  }

  

  return (
    <Layout>
          <div><MessageBox /></div>
    <div >

      <Popover 
        visible={visible} // false 넘겨주면 모달 popover modal 닫힘
        content = {<><MessageBox/><button onClick={closed}>Close</button></>}
        top={40}
        left={50}
        trigger="click"
      >

        <button onClick={()=>setVisible(true)}>popover event</button>

      </Popover>
      </div>
      <SocialLogin/>

    </Layout>
  )
}

export default Test