import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
type Props = {};

const Lodding = (props: Props) => {
  // 인가코드
  const router = useRouter();
  const { platform, code } = router.query;
  useEffect(() => {
    if (code && platform ) {
        console.log("코드화인: ", code, platform)
      axios.get(`/api/auth/${platform}?code=${code}`).then((res) => {
        //aws
        console.log('response: ', res.data);
      });
    }
  }, [code, platform]);

  const userInfo = () => {
	axios.get(`/api/users`).then((res) => {
        //aws
        console.log('유저조회: ', res.data);
      } ).catch((err)=>console.log(err))
		
	  ;
  }

  const logout = () => {
	axios.delete(`/api/auth/logout`).then((res) => {
        //aws
        console.log('로그아웃: ', res);
      }).catch((err)=>console.log(err));
  }

  return (
    <div>
      {code ? (
        <h3>
          platform: {platform}
          <br /> 인가코드:{code}{' '}
        </h3>
      ) : (
        <h3>로딩중...</h3>
      )}
	  <div>
<h2 >유저조회</h2>
<button onClick={userInfo}>조회</button>
<button onClick={logout}>로그아웃</button>
	  </div>
    </div>
  );
};

export default Lodding;
