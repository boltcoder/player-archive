import { useState } from 'react';
import { TextInput, Typography, PlayerCard, NoResults } from 'appPresentationComponents';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useCacheFirstPlayerById from 'appHooks/useCacheFirstPlayerById';
import stylesheet from './style';

const useStyles = makeStyles(stylesheet);

const SearchWidget = () => {
  const classes = useStyles();
  
  const [id, setId] = useState("");
  
  const onIdChange = async (id) => {
    setId(id.trim().toLowerCase());
  }
  const { loading, player } = useCacheFirstPlayerById(id);
  const hasPlayerInfo = !!player;
  const noSearchInput = !id;
  return (
    <Grid container justify="center">
      <Grid container item md={6} justify="center">
        <Grid item xs={12} container justify="center">
          <Typography variant="h4" color="textPrimary">Search Our Archive! 😍</Typography>
        </Grid>
        <Grid item xs={12} className={classes.input}>
          <TextInput 
            onChange={onIdChange}
            variant="outlined"
            fullWidth
            label="Enter Player Name"
            debounce
            debounceOptions={{
              time: 200,
            }}
            />
        </Grid>
        <Grid container item xs={12} className={classes.results} justify="center">
        { hasPlayerInfo && <PlayerCard {...player.formatInfoForCard()} loading={loading}/> } 
        { !hasPlayerInfo && !noSearchInput && <NoResults title="Player not found! 😔" subtitle="We couldn't find this player in our archive" /> }
        </Grid>
      </Grid>
  </Grid>
  );
}
export default SearchWidget;