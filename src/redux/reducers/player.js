import { handleActions } from 'redux-actions';
import PlayerModel from 'appModels/Player';
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
        draftState.dictionary[id] = new PlayerModel(player);
      })
    },
    throw: (state, action)=>{
      return state;
    }
  }
},initialState);
export default player;