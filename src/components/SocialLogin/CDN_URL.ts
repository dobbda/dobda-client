import qs from 'qs';

const AUTHORIZE_URI = 'https://accounts.google.com/o/oauth2/v2/auth';

const queryStr = qs.stringify({
  client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  redirect_uri: `${process.env.NEXT_PUBLIC_BASE_CLIENT_URL}/login/callback/google`,
  response_type: 'code',
  access_type: 'offline',
  include_granted_scopes: true,
  scope: 'https://www.googleapis.com/auth/userinfo.email',
});
export const GOOGLE_URL = AUTHORIZE_URI + '?' + queryStr;

export const GITHUB_URL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`;

export const KAKAO_URL = `
https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}
&redirect_uri=${process.env.NEXT_PUBLIC_BASE_CLIENT_URL}/login/callback/kakao&response_type=code`;

export const NAVER_URL = `
https://nid.naver.com/oauth2.0/authorize?response_type=code
&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}
&redirect_uri=${process.env.NEXT_PUBLIC_BASE_CLIENT_URL}/login/callback/naver&state=test1`;
