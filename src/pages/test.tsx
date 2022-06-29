import React,{useState} from 'react';
import {MessageBox} from 'src/components/MessageBox/MessageBox';
import {Popover} from 'src/components/common';

type Props = {}

const Test:React.FC = (props: Props) => {
  const [visible, setVisible] = useState<boolean>(false)
  const closed = () => {
    setVisible(false)
  }
  return (
    <>
      <div><MessageBox /></div>
      <Popover 
        visible={visible} // false 넘겨주면 모달 popover modal 닫힘
        content = {<><MessageBox/><button onClick={closed}>Close</button></>}
        top={40}
        left={50}
        trigger="click"
      >

        <button onClick={()=>setVisible(true)}>popover event</button>

      </Popover>
    </>
  )
}

export default Test