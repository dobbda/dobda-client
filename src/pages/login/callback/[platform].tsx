import React, { useEffect } from 'react';
import axios from 'axios';

import { useRouter } from 'next/router';
import { Loading } from 'src/components/common';

type Props = {};

const Lodding = (props: Props) => {
  // 인가코드
  const router = useRouter();
  const { platform, code } = router.query;

  useEffect(() => {
    if (code && platform) {
      axios.get(`/api/auth/${platform}?code=${code}`).then((res) => {
        if (window.opener) {
          res.data.success
            ? (window.opener.postMessage(res.data.response, location.origin), window.close())
            : window.opener.postMessage(false, location.origin);
        }
      });
    }
  }, [code, platform]);

  return <Loading loading many />;
};

export default Lodding;
