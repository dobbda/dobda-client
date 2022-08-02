import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useQueryClient, useQuery } from 'react-query';
import axios from 'axios';

import { useRouter } from 'next/router';
import { setLocalStorage } from 'src/lib/localStorage';
import { useAuth } from 'src/hooks/useAuth';
import { variable } from 'src/config/defaultValue';

type Props = {};

const Lodding = (props: Props) => {
	const queryClient =  useQueryClient();
  // 인가코드
  const router = useRouter();
  const { platform, code } = router.query;

  useEffect(() => {

    if (code && platform) {
      axios.get(`/api/auth/${platform}?code=${code}`).then((res) => {
        if (window.opener) {
          res.data.success
            ? (
						  window.opener.postMessage(res.data.response, location.origin), window.close()
							)
            : window.opener.postMessage(false, location.origin);
          // window.close();
        }
      });
    }
  }, [code, platform]);

  return <>loading...</>;
};

export default Lodding;
