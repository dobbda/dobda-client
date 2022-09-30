import { setLocalStorage } from 'src/lib/utils/localStorage';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'cookies';
import { IncomingMessage, ServerResponse } from 'http';
import { QueryClient } from 'react-query';

export const cookieDecod = (req: IncomingMessage, res: ServerResponse) => {
  const cookies = new Cookies(req, res);
  let access_ = cookies.get('jwt-access')?.split('.')[1];
  let refesh_ = cookies.get('jwt-refresh')?.split('.')[1];

  let access_exp = null;
  let refresh_exp = null;
  if (access_) {
    access_exp = JSON.parse(Buffer.from(access_, 'base64')?.toString('utf8'))?.exp * 1000;
  }

  if (refesh_) {
    refresh_exp = JSON.parse(Buffer.from(refesh_, 'base64')?.toString('utf8'))?.exp * 1000;
  }
  return { access_exp, refresh_exp };
};
