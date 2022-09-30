import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useQueryClient, useQuery } from 'react-query';
import axios from 'axios';

import { useRouter } from 'next/router';
import { setLocalStorage } from 'src/lib/utils/localStorage';
import { useAuth } from 'src/hooks';
import { variable } from 'src/config/defaultValue';
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
          // window.close();
        }
      });
    }
  }, [code, platform]);

  return <Loading loading many />;
};

export default Lodding;
