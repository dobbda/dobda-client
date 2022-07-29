
import axios,{AxiosResponse,AxiosRequestConfig, AxiosError} from 'axios';


const isAxiosError = (error: any): error is AxiosError => {
  return error.isAxiosError;
};


export const request = async (config: AxiosRequestConfig) => {
  try {
    const response = await axios(config);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {

      throw error.response?.data;
    }
  }
};
