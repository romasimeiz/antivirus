import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import helloSaga from '../sagas/sagas';
import history from '../history';
import { routerMiddleware } from 'react-router-redux';

const sagaMiddleware = createSagaMiddleware();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware, middleware),
    // other store enhancers if any
));

sagaMiddleware.run(helloSaga);

export default store;