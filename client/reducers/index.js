import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

/**
 * Combine reducers
 */

export default combineReducers({
    form: formReducer,
});
