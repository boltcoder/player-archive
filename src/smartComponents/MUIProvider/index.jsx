import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import useMUITheme from 'appHooks/useMUITheme';

const MUIProvider = (props) => {
  const {
    children,
  } = props;
  const theme = useMUITheme();
  return <MuiThemeProvider theme={theme}><CssBaseline>{children}</CssBaseline></MuiThemeProvider>;
}
MUIProvider.displayName='MUIProvider';
export default MUIProvider;
