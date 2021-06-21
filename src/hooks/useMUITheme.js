import { useEffect, useMemo, useCallback } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import { getActiveTheme } from 'appSelectors/user';
import { changeTheme } from 'appActions/user';
import getTheme from 'appUtils/getTheme';
import THEME_TYPES from 'appConstants/themeTypes';

const useMUITheme = ()=> {

  const dispatch = useDispatch();

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  const themeType = useSelector(getActiveTheme);

  const setTheme = useCallback((themeType) => {
    dispatch(changeTheme(themeType));
  },[dispatch]);

  useEffect(()=>{
    setTheme(prefersDarkMode ? THEME_TYPES.DARK: THEME_TYPES.LIGHT)
  },[setTheme, prefersDarkMode])

  const theme = useMemo(()=>getTheme({
    themeType,
  }),[themeType]);

  return theme;
}
export default useMUITheme;