import { APP_BAR_HEIGHT } from "appConstants/dimensions";
const styles = (theme)=>(
  {
    container: {
      position:'fixed',
      top: 0,
      left:0,
      width:'100%',
      height: APP_BAR_HEIGHT,
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.shadows[4],
    },
    titleContainer: {
      ...theme.flexboxes.horizontallyVerticallyCentered,
      height:'100%',
    },
    themeSwitchContainer: {
      marginLeft: theme.spacing(2),
      ...theme.flexboxes.verticallyCentered,
    }
  }
);
export default styles;