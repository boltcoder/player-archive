import AppBar from 'appSmartComponents/AppBar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import stylesheet from './style';
const useStyles = makeStyles(stylesheet);

const Layout = (props) => {
  const classes = useStyles();
  const {
    children,
  } = props;
  return (
    <>
      <AppBar />
      <div className={classes.contentContainer}>
        <div className={classes.contentWrapper}>
        {children}
        </div>
      </div>
    </>
    
  );

}
Layout.displayName = 'Layout';
Layout.propTypes = {
  children: PropTypes.element,
}
export default Layout;