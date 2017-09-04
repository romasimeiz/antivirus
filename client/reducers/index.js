import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import users from './users';
import { routerReducer } from 'react-router-redux';

/**
 * Combine reducers
 */

export default combineReducers({
    form: formReducer,
    auth,
    users,
    router: routerReducer
});
