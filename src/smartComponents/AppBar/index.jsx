import { makeStyles } from '@material-ui/core/styles';
import stylesheet from './style';
import { Typography } from 'appPresentationComponents';
import ThemeSwitch from 'appSmartComponents/ThemeSwitch';
const useStyles = makeStyles(stylesheet);

const AppBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography variant="h4" color="primary" component="h1">One F<Typography variant="h5" component="span">⚽⚽</Typography>tball</Typography>
        <div className={classes.themeSwitchContainer}>
          <ThemeSwitch></ThemeSwitch>
        </div>
      </div>
    </div>
  );
}
AppBar.displayName = 'AppBar';
export default AppBar;