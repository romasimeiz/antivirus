import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import users from './users';
import files from './files';
import projects from './projects';
import projectEdit from './project-edit';
import notification from './notification';
import { routerReducer } from 'react-router-redux';
/**
 * Combine reducers
 */

export default combineReducers({
    form: formReducer,
    auth,
    users,
    projects,
    files,
    projectEdit,
    notification,
    router: routerReducer,
});