import { getLocalStorage, setLocalStorage } from 'src/lib/localStorage';
import { Auth } from 'src/types';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { http } from '../http';
import { REQUEST_URL } from '../REQUEST_URL';
import { variable } from 'src/config/defaultValue';
import { useQueryClient } from 'react-query';
import { getCookie } from 'src/lib/getCookie';

const auth = async (): Promise<Auth>  => {
  //로그인확인용
  if (getCookie('access-expires')) {
		console.log('Access expires')
    return await axios
      .get(REQUEST_URL.get_auth)
      .then((res) => res.data.response)
      .catch((err) => console.log('err', err));
  } else if (getCookie('refresh-expires')) {
		console.log('refres expires')
    return await axios.get(REQUEST_URL.get_refresh).then((res) => res.data.response.user);
  } else {
    null;
  }
};

const myInfo = async () => {
  //내정보 상세

  return await axios.get('/api/users/mynfo').then((res) => res.data?.response);
};

const logout = async () => {
  //내정보 상세

  return await axios.delete('/api/auth/logout');
};

export { auth, myInfo, logout };
