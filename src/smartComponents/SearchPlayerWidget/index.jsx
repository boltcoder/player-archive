import { useState } from 'react';
import { TextInput, Typography, CardWithStats, NoResults } from 'appPresentationComponents';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useCacheFirstPlayerById from 'appHooks/useCacheFirstPlayerById';
import stylesheet from './style';

const useStyles = makeStyles(stylesheet);

const SearchWidget = () => {
  const classes = useStyles();
  
  // manage text input changes in internal state here
  const [id, setId] = useState("");
  
  
  const onIdChange = async (id) => {
    // trim text input and lower case it for higher chances of hits
    setId(id.trim().toLowerCase());
  }

  // use this hook to get player from redux store and also fetch in background
  // if it returns loading = true, && player!=null, means the player's new info 
  // is being fetched while we can still show stale data
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

        { hasPlayerInfo && <CardWithStats {...player.formatInfoForCard()} loading={loading}/> } 

        { !hasPlayerInfo && !noSearchInput && <NoResults title="Player not found! 😔" subtitle="We couldn't find this player in our archive" /> }

        </Grid>

      </Grid>
  </Grid>
  );
}
export default SearchWidget;