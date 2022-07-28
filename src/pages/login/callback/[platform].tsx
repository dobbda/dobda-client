import React, { useEffect, useLayoutEffect, useState } from 'react';
import { QueryClient, useQuery } from 'react-query';
import axios from 'axios';

import { useRouter } from 'next/router';

type Props = {};

const Lodding = (props: Props) => {
  // 인가코드
  const router = useRouter();
  const { platform, code } = router.query;
  useLayoutEffect(() => {
    if (code && platform) {
      axios.get(`/api/auth/${platform}?code=${code}`).then((res) => {
        if (window.opener) {
          res.data.success
            ? (window.opener.postMessage(false, location.origin), window.close())
            : window.opener.postMessage(false, location.origin);
          window.close();
        }
      });
    }
  }, [code, platform]);

  return <>loading...</>;
};

export default Lodding;
