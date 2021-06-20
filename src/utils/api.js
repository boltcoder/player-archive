import axios from 'axios';
import { API_HOST } from 'appConfig';

export const CancelToken = axios.CancelToken;

const api = axios.create({
  baseURL         : `${API_HOST}/`,
  withCredentials : false,
});
api.interceptors.response.use((response) => {
  return Promise.resolve({
    response: response.data,
    error: false,
    httpStatus: 200,
  });

}, (error) => {
  const unexpected = !error.response || !error.response.data;
  if(unexpected) {
    return Promise.reject({
      response: "Something went wrong, Please try again",
      httpStatus: null,
      unexpected: true,
      error: true,
    });
  } else {
      
      // handle graceful errors on frontend
      return Promise.resolve({
        response: error.response.data,
        httpStatus: error.response.status,
        unexpected: false,
        error: true,
      });
  }
});


export default api;
