import axios,{AxiosResponse,AxiosRequestConfig} from 'axios';
import { REQUEST_URL } from './requestURL';


// const Auth = Object.freeze

const  auth = async() => {
    return await axios.get(REQUEST_URL.get_auth).then(res=>res.data.response)
		}


const  refresh = async() => {
	return await axios.get(REQUEST_URL.get_refresh)
	}

export {auth, refresh}