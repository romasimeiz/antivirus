import * as actions from "../actions/actions";

const initialState = {
    users : [],
    pagesCount: 1,
    usersGrid: [
        {
            name: 'ID',
            className: '',
            mapping: 'id'
        },
        {
            name: 'Name',
            className: '',
            mapping: 'name'
        },
        {
            name: 'Email',
            className: '',
            mapping: 'email'
        }
    ],
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case actions.USERS.SUCCESS:
            return {
                ...state,
                users: action.response.users.data,
                pagesCount: action.response.pagesCount,
                isFetching: false
            };
        case actions.USERS.FAILURE:
            return {
                ...state,
                errorMessage: action.errorMessage,
                isFetching: false
            };
        case actions.USERS.REQUEST:
            return {
                ...state,
                isFetching: true
            };
        default:
            return state
    }
};

export default users;