import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
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
Stats.propTypes = {
  label: PropTypes.oneOf([PropTypes.string,PropTypes.number,PropTypes.element]),
  value: PropTypes.oneOf([PropTypes.string,PropTypes.number,PropTypes.element]),
}
export default Stats;