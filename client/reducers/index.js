import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import { routerReducer } from 'react-router-redux'

/**
 * Combine reducers
 */

export default combineReducers({
    form: formReducer,
    auth,
    routing: routerReducer
});
