import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import cookie from 'cookie';

export const cookieManager = async (req: any) => {
  const all = cookie.parse(req&&req);

  return all;
};
