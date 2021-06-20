import { APP_BAR_HEIGHT } from "appConstants/dimensions";
export default (theme)=> ({
  contentContainer: {
    marginTop: APP_BAR_HEIGHT,
    height: '100%',
    width: '100%',
  },
  contentWrapper: {
    padding: theme.spacing(8),
    height: '100%',
    width: '100%',
    [theme.breakpoints.between('xs','sm')]: {
      padding: theme.spacing(4),
      fontSize: 10,
    }
  }
});