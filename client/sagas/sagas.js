import * as con from '../constants/constants';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';


function* loginUser(action) {
    console.log(action.creds)
    const data = {
        email: 'admin@example.com',
        password: "password"
    }
    try {
        fetch('http://192.168.1.148:3000/user/login/', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: "cors",
            body: JSON.stringify(data)
        }).then(function (res) {
            console.log(res.json())
        })
        // yield put({type: con.LOGIN_SUCCESS, user: user});
    } catch (e) {
        yield put({type: con.LOGIN_FAILURE, message: e.message});
    }
}

export default function* helloSaga() {
    yield takeLatest(con.LOGIN_REQUEST, loginUser);
}