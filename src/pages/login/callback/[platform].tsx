import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
type Props = {};

const Lodding = (props: Props) => {
  // 인가코드
  const router = useRouter();
  const { platform, code } = router.query;
  useEffect(() => {
    axios.get(`/fake/auth/${platform}?code=${code}`).then((res) => {
      //aws
      console.log('response: ', res);
    });
  },[code, platform]);


  return <div>{code ? <h3>platform: {platform}<br/> 인가코드:{code} </h3> : <h3>로딩중...</h3>}</div>;
};

export default Lodding;
