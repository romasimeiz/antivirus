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

export default function* rootSaga() {
    yield [
        fork(watchLogin),
        fork(watchLogout),
        fork(watchUsers)
    ]
}