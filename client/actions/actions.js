import * as con from '../constants/constants';

export function receiveLogin(user) {
    return {
        type: con.LOGIN_SUCCESS,
        user
    }
}

export function logout() {
    return {
        type: con.LOGOUT_REQUEST,
    }
}

export function doLogin(creds) {
    return {
        type: con.LOGIN_REQUEST,
        creds
    }
}