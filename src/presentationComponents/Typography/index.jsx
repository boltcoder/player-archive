import { Typography as MaterialTypography } from "@material-ui/core";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import stylesheet from './style';
import classnames from 'classnames';
const useStyles = makeStyles(stylesheet);


const Typography = (props) => {
  const {
    weight = 'regular',
    className,
    ...restProps
  } = props;
  const classes = useStyles({weight});
  
  return <MaterialTypography className={classnames(classes.weight,className)} {...restProps} />
}

Typography.displayName = 'Typography'
Typography.propTypes = {
  weight: PropTypes.oneOf(['regular','medium','bold']),
  children: PropTypes.element
}

export default Typography;