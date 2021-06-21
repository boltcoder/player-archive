import { createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

/**
 * All Theme related changes can be done here. 
 * @param {Object} {themeType} Named parameters. 
 * @returns Returns a dark/light mode theme based on theme type
 */
const getTheme = ({ themeType }) => {

  const theme = createMuiTheme({
    palette: {
      type: themeType,
    },  
    
    // commonly used css rules can be added here and reused.
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
  
  /* 
  responsiveFontSizes
  simple utility to generate contrasting fontsizes for xs,sm,md,lg.
  This utility just modifies the theme as following:
  {
    theme.typography.h5: {
      fontsize: 1.25rem,
      @media(min-width:0px and maxWidth: 600px): {
        fontsize: `${(1.25*1/factor)}rem`,
      }
    }
  }
  */
  return responsiveFontSizes(theme,{factor:3});
}
export default getTheme;