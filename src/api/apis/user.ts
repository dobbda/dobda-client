import { Auth, UserUpdate } from 'src/types';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { http } from '../http';
import { REQUEST_URL } from '../REQUEST_URL';
import { variable } from 'src/config/defaultValue';
import { useQueryClient } from 'react-query';
import { getCookie } from 'src/lib/getCookie';

export const auth = async (): Promise<Auth>  => {
  //로그인확인용
  if (getCookie('access-expires')) {
    return (await axios.get(REQUEST_URL.get_auth)).data.response
  } else if (getCookie('refresh-expires')) {
    return await axios.get("api/auth/refresh").then((res) => res.data.response.user);
  } else {
    return;
  }
};

export const myInfo = async () => {
  //내정보 상세
  return await axios.get('/api/users/mynfo').then((res) => res.data?.response);
};


export const myInfoUpdate = async (data:UserUpdate) => {
  //내정보 업데이트
  return await axios.patch('/api/users/myinfo',data).then((res) => res.data?.response);
};

export const getUserInfo = async () => {
  //내정보 상세

  return await axios.patch('/api/users/mynfo').then((res) => res.data?.response);
};




export const logout = async () => {
  return await axios.delete('/api/auth/logout');
};

