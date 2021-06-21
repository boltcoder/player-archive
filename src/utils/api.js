import axios from 'axios';
import { API_HOST } from 'appConfig';

// pre-configure axios' instance with api host
const api = axios.create({
  baseURL         : `${API_HOST}/`,
  withCredentials : false,
});

// format all api 200 OK response in a uniform way
api.interceptors.response.use((response) => {
  return Promise.resolve({
    response: response.data,
    error: false,
    httpStatus: 200,
  });

}, (error) => {

  // format all api error response in a uniform way
  // segregate unexpected errors (network/client timeout. These errors occur client side in network fetch) from errors sent from backend. 
  const unexpected = !error.response || !error.response.data;
  
  if(unexpected) {
    return Promise.reject({
      response: "Something went wrong, Please try again",
      httpStatus: null,
      unexpected: true,
      error: true,
    });
  } else {
      
      // handle graceful errors sent from backend. 
      return Promise.resolve({
        response: error.response.data,
        httpStatus: error.response.status,
        unexpected: false,
        error: true,
      });
  }
});


export default api;
