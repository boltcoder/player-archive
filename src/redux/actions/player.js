import {
  FETCH_PLAYER
} from 'appRedux/actionTypes';
import { createActions } from 'redux-actions';

export const {
  fetchPlayer,
} = createActions({
  [FETCH_PLAYER]: () => {
    return {
      id: 1,
      name: 'Fabio',
      age: 21,
    }
  }

});