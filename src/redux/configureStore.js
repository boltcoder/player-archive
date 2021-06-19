import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'appReducers';

const middlewares = [ ];

const store = createStore(
  reducers,
  // initialReduxState,
  compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__()),
  // applyMiddleware.apply(this, middlewares),
);


if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  // https://github.com/reactjs/react-redux/releases/tag/v2.0.0
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default;
    store.replaceReducer(nextRootReducer);
    return store;
  });
}

export default store;