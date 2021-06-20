import { createMuiTheme } from '@material-ui/core/styles';

const getTheme = ({ themeType }) => {
  return createMuiTheme({
    palette: {
      type: themeType,
    },  
    flexboxes: {
      horizontallyVerticallyCentered: {
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
      },
      verticallyCentered: {
        display: 'flex',
        alignItems:'center',
      },
      horizontallyCentered: {
        display: 'flex',
        justifyContent:'center',
      }
    }
  });
}
export default getTheme;