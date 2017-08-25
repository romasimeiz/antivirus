import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import helloSaga from '../sagas/sagas';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware, middleware),
    // other store enhancers if any
));

sagaMiddleware.run(helloSaga);

export default store;