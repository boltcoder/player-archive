import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Avatar, Grid, CircularProgress } from '@material-ui/core';
import stylesheet from './style';
import { Typography, Stats } from 'appPresentationComponents';

const useStyles = makeStyles(stylesheet);

// Quintessential example of a presentation component written completely decoupled from business logic
// No notion of "Player" info leaks in this. 
// this very well to show a certain Dish Info with calorie stats
const CardWithStats = (props) => {
  const classes = useStyles();
  const {
    title,
    subtitle,
    stats,
    loading,
  } = props;

  const StatsComponent = stats.map(({
    label,
    value,
  }, index)=>(
    <Grid key={`${title}_card_${index}`} item xs={12} md={6} >
      <Stats 
        label={label}
        value={value}
      />
    </Grid>
  ));
  return (
    <div className={classes.container}>
      <Grid container direction="column" alignItems="center">
        <Avatar>{title[0]}</Avatar>
        <Typography color="primaryText" variant="h6" weight="medium">{title}</Typography>
        <Typography color="primaryText" variant="subtitle2">{subtitle}</Typography>
        <Grid container>

          {StatsComponent}
        </Grid>
      </Grid>
      {loading && <div className={classes.loading}><CircularProgress color="primary" size={40}></CircularProgress></div>}
    </div>
  );
}

CardWithStats.propTypes = {
  title: PropTypes.oneOf([PropTypes.string,PropTypes.number,PropTypes.element]),
  subtitle: PropTypes.oneOf([PropTypes.string,PropTypes.number,PropTypes.element]),
  stats: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOf([PropTypes.string,PropTypes.number,PropTypes.element]),
    value: PropTypes.oneOf([PropTypes.string,PropTypes.number,PropTypes.element]),
  })),
  loading: PropTypes.bool,
}


CardWithStats.displayName = 'CardWithStats';
export default CardWithStats;