import { MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

import useMUITheme from 'appHooks/useMUITheme';

/**
 * 
 * Central Theme Provider. This injects theme into the app and makes it available to the entire tree
 * MUI's hooks like useStyles, useClasses are subscribed to this React Context.
 * 
 * 
 */
const MUIProvider = (props) => {
  const {
    children,
  } = props;

  const theme = useMUITheme();

  // CssBaseline is just like injecting normalize css https://necolas.github.io/normalize.css/latest/normalize.css
  // basic things like setting box-sizing: border-box, img: border-style: none etc
  return <MuiThemeProvider theme={theme}><CssBaseline>{children}</CssBaseline></MuiThemeProvider>;
}

MUIProvider.propTypes = {
  children: PropTypes.element,
}
MUIProvider.displayName='MUIProvider';
export default MUIProvider;
