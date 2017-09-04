import * as actions from "../actions/actions";

const initialState = {
    user: {
        name: 'guest',
    },
    errorMessage: false,
    isFetching: false,
    sideBar: [
        {
            name: 'Home',
            className: 'fa fa-home'
        },
        {
            name: 'Users',
            className: 'fa fa-user-o'
        }
    ],
    clientsGrid: [
        {
            name: 'Name',
            className: 'table-name',
            mapping: 'name'
        },
        {
            name: 'Email',
            className: '',
            mapping: 'ClientEmail'
        },
        {
            name: 'Phone',
            className: '',
            mapping: 'phone'
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

const auth = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN.SUCCESS:
            localStorage.setItem('access_token', action.response.token);
            return {
                ...state,
                user: action.response.user,
                isFetching: false
            };
        case actions.LOGIN.FAILURE:
            return Object.assign({}, state, {
                errorMessage: action.errorMessage,
                isFetching: false
            });
        case actions.LOGIN.REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case actions.LOGOUT.SUCCESS:
            localStorage.clear();
            return {
                ...state,
                user: {
                    name: 'guest',
                },
                isFetching: false
            };
        case actions.LOGOUT.FAILURE:
            return Object.assign({}, state, {
                errorMessage: action.errorMessage,
                isFetching: false
            });
        case actions.LOGOUT.REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        default:
            return state
    }
};

export default auth;
