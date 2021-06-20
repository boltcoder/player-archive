import { Provider } from 'react-redux';
import store from 'appRedux/configureStore';

const ReduxProvider = (props)=>{
  const {
    children,
  } = props;
  return <Provider store={store}>{children}</Provider>;
}

ReduxProvider.displayName='ReduxProvider';

export default ReduxProvider;