import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import helloSaga from '../sagas/sagas';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
));

sagaMiddleware.run(helloSaga);

export default store;