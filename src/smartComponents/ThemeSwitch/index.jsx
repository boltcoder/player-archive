import {
  Brightness3 as DarkModeIcon,
  Brightness5 as LightModeIcon,
} from '@material-ui/icons'
import THEME_TYPES from 'appConstants/themeTypes';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveTheme } from 'appSelectors/user';
import { changeTheme } from 'appActions/user';

/**
 * 
 *  Smart Component which toggles and sets themeType: dark/light in redux store
 *  MUIProvider is subscribed to that store value to change the theme at the root node
 */
const ThemeSwitch = () => {
  const dispatch = useDispatch();

  // get the current theme type from redux state
  const themeType = useSelector(getActiveTheme);

  const isDarkMode = themeType === THEME_TYPES.DARK;

  /* toggle the theme type in redux state*/
  const onIconClick = () => {
    dispatch(changeTheme(isDarkMode ? THEME_TYPES.LIGHT : THEME_TYPES.DARK,));
  }

  const Component = isDarkMode ? LightModeIcon : DarkModeIcon;

  return <Component color="white" onClick={onIconClick}></Component>
}
ThemeSwitch.displayName="ThemeSwitch";
export default ThemeSwitch;
