import { setLocalStorage } from 'src/lib/utils/localStorage';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'cookies';
import { IncomingMessage, ServerResponse } from 'http';
import { QueryClient } from 'react-query';
import { Exp } from 'src/types/content-type';

export const cookieDecod = (req: IncomingMessage, res: ServerResponse) => {
  const cookies = new Cookies(req, res);
  let access_ = cookies.get('jwt-access')?.split('.')[1];
  let refesh_ = cookies.get('jwt-refresh')?.split('.')[1];

  let access_exp = null;
  let refresh_exp = null;
  var result: Exp = {};

  if (access_) {
    var _ = JSON.parse(Buffer.from(access_, 'base64')?.toString('utf8'))?.exp * 1000;
    if (_ > Date.now()) result.access_exp = _;
  }

  if (refesh_) {
    _ = JSON.parse(Buffer.from(refesh_, 'base64')?.toString('utf8'))?.exp * 1000;
    if (_ > Date.now()) result.refresh_exp = _;
  }
  return result;
};
