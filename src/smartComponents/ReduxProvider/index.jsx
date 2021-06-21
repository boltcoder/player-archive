import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from 'appRedux/configureStore';

const ReduxProvider = (props)=>{
  const {
    children,
  } = props;
  return <Provider store={store}>{children}</Provider>;
}

ReduxProvider.displayName='ReduxProvider';
ReduxProvider.propTypes = {
  children: PropTypes.element,
}
export default ReduxProvider;