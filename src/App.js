import { Provider } from 'react-redux';
import store from 'appRedux/configureStore';
import Container from 'appContainers';

const App = () => {
  return (
    <Provider store={store}>
      <Container></Container>
    </Provider>
  );
}

export default App;
