import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid, CircularProgress } from '@material-ui/core';
import stylesheet from './style';
import { Typography, Stats } from 'appPresentationComponents';

const useStyles = makeStyles(stylesheet);
const PlayerCard = (props) => {
  const classes = useStyles();
  const {
    name,
    role,
    stats,
    loading,
  } = props;

  const PlayerStats = stats.map(({
    label,
    value,
  }, index)=>(
    <Grid key={`${name}_card_${index}`} item xs={12} md={6} >
      <Stats 
        label={label}
        value={value}
      />
    </Grid>
  ));
  return (
    <div className={classes.container}>
      <Grid container direction="column" alignItems="center">
        <Avatar>{name[0]}</Avatar>
        <Typography color="primaryText" variant="h6" weight="medium">{name}</Typography>
        <Typography color="primaryText" variant="subtitle2">{role}</Typography>
        <Grid container>

          {PlayerStats}
        </Grid>
      </Grid>
      {loading && <div className={classes.loading}><CircularProgress color="primary" size={40}></CircularProgress></div>}
    </div>
  );
}


PlayerCard.displayName = 'PlayerCard';
export default PlayerCard;