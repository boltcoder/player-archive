import { Provider } from 'react-redux';
import store from 'appRedux/configureStore';
const App = () => {
  return <Provider store={store}></Provider>
}

export default App;
