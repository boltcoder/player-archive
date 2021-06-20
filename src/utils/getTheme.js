import { createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

const getTheme = ({ themeType }) => {

  const theme = createMuiTheme({
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
  return responsiveFontSizes(theme,{factor:3});
}
export default getTheme;