import { makeStyles } from '@material-ui/core/styles';
import stylesheet from './style';
import { Typography } from 'appPresentationComponents';
const useStyles = makeStyles(stylesheet);
const Stats = (props) => {
  const {
    label,
    value,
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography color="primaryText" variant="body1" weight="medium" className={classes.label}>{label}</Typography>
      <Typography color="primaryText" variant="body1" className={classes.value}>{value}</Typography>
    </div>
  );

};

Stats.displayName = 'Stats';
export default Stats;