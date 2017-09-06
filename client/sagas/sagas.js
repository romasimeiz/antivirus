import * as actions from "../actions/actions";
import { call, put, take, fork } from 'redux-saga/effects';
import apiFetch from '../api';
import { push } from 'react-router-redux';

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
        yield take(actions.USERS.REQUEST);
        try {
            const users = yield call(apiFetch, '/user', {
                method: 'GET'
            });
            yield put(actions.users.success(users));
        } catch (e) {
            yield put(actions.users.error(e))
        }
    }
}

function* watchProjects() {
    while (true) {
        yield take(actions.PROJECTS.REQUEST);
        try {
            const projects = yield call(apiFetch, '/project', {
                method: 'GET'
            });

            projects.data.data.map( (value) => {
                value.link = `/projects/${value.id}/files`;
                return value;
            });

            yield put(actions.projects.success(projects));
        } catch (e) {
            yield put(actions.projects.error(e))
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
                value.className = value.hash_first != value.hash_last ? 'red' : '' ;
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
        fork(watchFiles)
    ]
}