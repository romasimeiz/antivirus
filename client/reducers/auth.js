import * as con from '../constants/constants';

const initialState = {
    user: {
        name: 'guest',
    },
    errorMessage: false,
    sideBar: [
        {
            name: 'Home',
            className: 'fa fa-home'
        },
        {
            name: 'Reservations',
            className: 'fa fa-calendar'
        },
        {
            name: 'Clients',
            className: 'fa fa-user-o'
        }
    ],
    clientsGrid : [
        {
            name : 'Name',
            className : 'table-name',
            mapping : 'name'
        },
        {
            name : 'Email',
            className : '',
            mapping : 'ClientEmail'
        },
        {
            name : 'Phone',
            className : '',
            mapping : 'phone'
        }
    ],
};

/**
 * Kirill Bashtenko
 * authorization and registration reducer
 * @param state
 * @param action
 * @returns {*}
 */

function auth(state = initialState, action) {
    switch (action.type) {
        case con.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                user: action.user
            });
        case con.LOGIN_FAILURE:
            return Object.assign({}, state, {
                errorMessage: action.errorMessage
            });
        case con.LOGOUT_REQUEST:
            return Object.assign({}, state, {
                user: {name: 'guest'}
            });
        default:
            return state
    }
}

export default auth;
