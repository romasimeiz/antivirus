import * as actions from "../actions/actions";
import { call, put, take, fork, wait } from 'redux-saga/effects';
import {delay} from "redux-saga"
import apiFetch from '../api';
import { push } from 'react-router-redux';
import { SubmissionError, startSubmit, stopSubmit, reset } from 'redux-form';
import projectMessages from '../messages/project-messages';
import userMessages from '../messages/user-messages';

function* watchLogin() {
    while (true) {
        const {request} = yield take(actions.LOGIN.REQUEST);
        try {
            const user = yield call(apiFetch, '/login', {
                method: 'POST',
                body: JSON.stringify(request)
            });
            yield put(actions.login.success(user));
            yield put(push('/home'));
        } catch (e) {
            yield put(actions.login.error(e))
        }
    }
}

function* watchProjectDelete() {
    while (true) {
        const {request} = yield take(actions.PROJECT_DELETE.REQUEST);
        try {
            const project = yield call(apiFetch, `/project/${request}/disable`, {
                method: 'GET',
            });
            yield put(actions.projectsDelete.success(project));
            yield put(actions.notification.show({message : projectMessages.DELETED_SUCCESS, title : 'Success!'}));

        } catch (e) {
            yield put(actions.projectsDelete.error(e));
            yield put(actions.notification.show({message : projectMessages.DELETED_ERROR, title : 'Error!'}));
        }
    }
}

function* watchProjectEdit() {
    while (true) {
        const action = yield take(actions.PROJECT_EDIT.REQUEST);
        try {
            const project = yield call(apiFetch, `/project/${action.request}`, {
                method: 'GET',
            });
            yield put(actions.projectEdit.success({project}));
        } catch (e) {
            yield put(actions.projectEdit.error(e));
        }
    }
}

function* watchProjectCreate() {
    while (true) {
        const formId = 'project-edit';
        const {request} = yield take(actions.PROJECT_CREATE.REQUEST);

        request.is_active = request.is_active === '' ? false : request.is_active;
        startSubmit(formId);

        try {
            const project = yield call(apiFetch, `/project`, {
                method: 'POST',
                body: JSON.stringify(request),
            });

            yield put(reset());
            yield put(stopSubmit(formId));
            yield put(push('/projects'));
            yield put(actions.notification.show({message : projectMessages.CREATED_SUCCESS, title : 'Success!'}));
        } catch (err) {
            let allErrors = {};
            for (let key in err.errors) {
                if (!err.errors.hasOwnProperty(key)) { continue }
                allErrors[key] = err.errors[key].join(' ');
            }
            yield put(stopSubmit(formId, allErrors));
            yield put(actions.projectCreate.error(err));
            yield put(actions.notification.show({message : projectMessages.CREATED_ERROR, title : 'Error!'}));
        }
    }
}

function* watchProjectEditSubmit() {
    while (true) {
        const formId = 'project-edit';
        const {request} = yield take(actions.PROJECT_EDIT_SUBMIT.REQUEST);
        const projectId = request.id;

        request.is_active = request.is_active === '' ? false : request.is_active;
        startSubmit(formId);

        try {
            const project = yield call(apiFetch, `/project/${projectId}`, {
                method: 'PUT',
                body: JSON.stringify(request)
            });

            yield put(reset());
            yield put(stopSubmit(formId));
            yield put(actions.notification.show({message : projectMessages.UPDATED_SUCCESS, title : 'Success!'}));
            yield put(push('/projects'));
        } catch (err) {
            let allErrors = {};
            for (let key in err.errors) {
                if (!err.errors.hasOwnProperty(key)) { continue }
                allErrors[key] = err.errors[key].join(' ');
            }
            yield put(stopSubmit(formId, allErrors));
            yield put(actions.projectEditSubmit.error(err));
            yield put(actions.notification.show({message : projectMessages.UPDATED_ERROR, title : 'Error!'}));
        }
    }
}

function* watchLogout() {
    while (true) {
        yield take(actions.LOGOUT.REQUEST);
        try {
            yield call(apiFetch, '/logout', {
                method: 'POST'
            });
            yield put(actions.logout.success());
            yield put(push('/'));
        } catch (e) {
            yield put(actions.logout.error(e))
        }
    }
}

function* watchUsers() {
    while (true) {
        const {request} = yield take(actions.USERS.REQUEST);
        let query = {
            page: request.page ? request.page : 1
        };

        if (request.sort) {
            query.sort = request.sort;
        }

        try {
            const users = yield call(apiFetch, '/user', {
                method: 'GET',
                query: query
            });
            const pagesCount = Math.ceil(users.data.total / 2 );
            yield put(actions.users.success({users, pagesCount}));
        } catch (e) {
            yield put(actions.users.error(e))
        }
    }
}

function* watchProfileUpdate() {
    while (true) {
        const formId = 'profile-update';
        const {request} = yield take(actions.PROFILE_UPDATE.REQUEST);
        const userId = request.id;
        startSubmit(formId);
        try {
            const file = request.photo_file;
            let user = yield call(apiFetch, `/user/${userId}`, {
                method: 'PUT',
                body: JSON.stringify(request),
            });
            yield put(reset());
            yield put(stopSubmit(formId));

            const formData = new FormData();
            formData.append('photo', file);
            yield put(actions.uploadProfilePhoto.request({file: formData, userId}));
            yield put(push('/home'));
            yield put(actions.notification.show({message : userMessages.CREATED_SUCCESS, title : 'Success!'}));
        } catch (err) {
            let allErrors = {};
            for (let key in err.errors) {
                if (!err.errors.hasOwnProperty(key)) { continue }
                allErrors[key] = err.errors[key].join(' ');
            }
            yield put(stopSubmit(formId, allErrors));
            yield put(actions.profileUpdate.error(err));
            yield put(actions.notification.show({message : userMessages.CREATED_ERROR, title : 'Error!'}));
        }
    }
}

function* watchNotices() {
    while (true) {
        yield take(actions.NOTIFICATION_SHOW);
        yield call(delay, 2000);
        yield put(actions.notification.hide());
    }
}

function* watchProjects() {
    while (true) {
        const {request} = yield take(actions.PROJECTS.REQUEST);
        let query = {
            page: request.page ? request.page : 1
        };

        if (request.sort) {
            query.sort = request.sort;
        }

        try {
            const projects = yield call(apiFetch, '/project', {
                method: 'GET',
                query: query
            });

            projects.data.data.map( (value) => {
                value.link = `/projects/${value.id}/files`;
                return value;
            });
            const pagesCount = Math.ceil(projects.data.total / 2 );
            yield put(actions.projects.success({projects, pagesCount}));
        } catch (e) {
            yield put(actions.projects.error(e))
        }
    }
}

function* watchUploadProfilePhoto() {
    while (true) {
        const {request} = yield take(actions.UPLOAD_PROFILE_PHOTO.REQUEST);
        try {
            const user = yield call(apiFetch, `/user/${request.userId}/uploadfile`, {
                method: 'POST',
                body: request.file,
                headers: {
                    'Content-Type': 'auto'
                }
            });
            // yield put(actions.uploadProfilePhoto.success('file'));
            yield put(actions.profileUpdate.success({user: user.data}));
        } catch (e) {
            yield put(actions.uploadProfilePhoto.error(e));
        }
    }
}

function* watchFiles() {
    while (true) {
        const action = yield take(actions.FILES.REQUEST);
        try {
            const files = yield call(apiFetch, `/files/project/${action.request}`, {
                method: 'GET'
            });

            files.data.data.map( (value) => {
                value.className = value.hash_first !== value.hash_last ? 'danger' : '' ;
                return value;
            });

            yield put(actions.files.success(files));
        } catch (e) {
            yield put(actions.files.error(e))
        }
    }
}

export default function* rootSaga() {
    yield [
        fork(watchLogin),
        fork(watchLogout),
        fork(watchUsers),
        fork(watchProjects),
        fork(watchFiles),
        fork(watchProjectEdit),
        fork(watchProjectEditSubmit),
        fork(watchProjectCreate),
        fork(watchUploadProfilePhoto),
        fork(watchProjectDelete),
        fork(watchProfileUpdate),
        fork(watchNotices),
    ]
}