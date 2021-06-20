import { handleActions } from 'redux-actions';
import THEME_TYPES from 'src/constants/themeTypes';
import { 
  CHANGE_THEME
 } from 'appRedux/actionTypes';

const initialState = {
  themeType: THEME_TYPES.LIGHT,
};

const user = handleActions({
  [CHANGE_THEME]: (state,action) => {
    const themeType = action.payload;
    return {
      ...state,
      themeType,
    }
  },
  
},initialState);
export default user;