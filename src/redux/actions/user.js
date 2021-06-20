import {
  CHANGE_THEME
} from 'appRedux/actionTypes';
import { createActions } from 'redux-actions';

export const {
  changeTheme,
} = createActions(CHANGE_THEME);