/*
  A small Custom redux middleware which can be used to empower action creators with more capabilities and avoid less boilerplate
*/

import apiClient from 'appUtils/api';
import httpStatus from 'http-status';

const hasPromiseKey = (val) => val && typeof val.promise === 'function';

const promiseMiddleware = (store) => {
  const { dispatch, getState, } = store;

  return (next) => (action) => {
    // check if payload has a key 'promise' which is a function, then provide that function
    // APIClient and dispatch.
    // promise function should return a promise always
    if (hasPromiseKey(action.payload)) {

      // call that api promise here and pass
      return action.payload.promise({ apiClient, dispatch, getState, })
        .then(({ response }) => {
          const data = response?.data || {};
          dispatch(Object.assign({}, action, { payload: data, }));
        }).catch((errorObject) => {
          const { 
            response,
            http_status,
            unexpected,
            error,
           } = errorObject;
          
           // For unexpected errors like (no network etc) which are not gracefully sent by backend just show an alert for now.
           // in real life, we can dispatch a redux action from in here and open modal and show error in that modal.
           if(unexpected) {
              alert("Please check your internet connection. PS: I could've used a UI modal for this");
           }

          // if it was expected or unexpected error the reducers should know
          dispatch(Object.assign({}, action, { payload: response, error: true }));
        });
    }

    return next(action);
  };
};

export default promiseMiddleware;