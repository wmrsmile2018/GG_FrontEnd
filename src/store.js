import { createStore, compose, applyMiddleware } from 'redux';
import { sessionService } from 'redux-react-session';
import createSafaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import { rootSaga } from './sagas/index';


const sagaMiddleware = createSafaMiddleware();

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadedState => (
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(thunk, sagaMiddleware)
    ),
  )
);

const store = configureStore({});
sessionService.initSessionService(store);
sagaMiddleware.run(rootSaga)

export default store;
