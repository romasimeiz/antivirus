import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import users from './users';
import files from './files';
import projects from './projects';
import projectForm from './project_form';
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
    projectForm,
    router: routerReducer
});
