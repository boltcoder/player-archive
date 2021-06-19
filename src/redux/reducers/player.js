import { handleActions } from 'redux-actions';
import produce from 'immer';
import { 
  FETCH_PLAYER
 } from 'appRedux/actionTypes';

const initialState = {
  dictionary: {},
};

const player = handleActions({
  [FETCH_PLAYER]: {
    next:(state, action)=>{
      const player = action.payload;
      const {
        id
      } = player;
      return produce(state, (draftState)=>{
        draftState.dictionary[id] = player;
      })
    },
    throw: (state, action)=>{
      return state;
    }
  }
},initialState);
export default player;