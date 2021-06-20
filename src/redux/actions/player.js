import {
  FETCH_PLAYER
} from 'appRedux/actionTypes';
import { createActions } from 'redux-actions';

export const {
  fetchPlayer,
} = createActions({
  [FETCH_PLAYER]: ({ id }) => ({
    promise: async ({ apiClient }) => {
        const firstResponse = await apiClient.get(`/player/data/${id}`);
        const { response, httpStatus, error } = firstResponse;
        // if the first api didn't error out extract player data from it
        if(!error) {
          const {
            data: {
              active,
              player_id,
            }
          } = response;
          // if the player was active only then hit
          if(active) {
            const secondResponse = await apiClient.get(`/player/profile/${player_id}`);
            const {
              error
            } = secondResponse;
            // if we successfully get the data from secondResponse
            if(!error) {
              // promise middleware is aware of parsing apiclient's response and packaging them into action.payload for reducers to understand
              return Promise.resolve({...secondResponse });
            } else {
              // if not, then we'll let middleware handle the rest
              return Promise.reject({...secondResponse, error: true });
            }
          } else {
            // if not active then let's just fail and middleware will handle api failure for us
            return Promise.reject({ ...firstResponse, error: true,  });
          }
        }
        else {
          // since it's a resolved promise from apiclient so server sent an expected error (internal server or not found)
          // we'll let the middleware handle it
          return Promise.reject({ ...firstResponse });
        }
        
    }
  })
});