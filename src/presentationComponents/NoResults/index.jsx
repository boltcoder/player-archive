
import NotFoundImage from './notFound.png'
import PropTypes from 'prop-types';
import { Typography, Image } from 'appPresentationComponents';
import { Grid } from '@material-ui/core';


const NoResults = (props) => {
  const {
    title,
    subtitle,
  } = props;

  return (
  <Grid container direction="column" alignItems="center">
    <Image alt="Not Found" src={NotFoundImage} width="20%" height="auto" />
    <Typography variant="h4" color="textSecondary" weight="medium">{title}</Typography>
    <Typography variant="h5" color="textSecondary">{subtitle}</Typography>
  </Grid>
  );
  
}

NoResults.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}
NoResults.displayName = NoResults;
export default NoResults;