import * as con from '../constants/constants';

export function receiveLogin(user) {
    return {
        type: con.LOGIN_SUCCESS,
        user
    }
}

export function doLogin(creds) {
    return (dispatch) =>  dispatch(receiveLogin(creds));
}