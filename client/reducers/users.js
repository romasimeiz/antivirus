import * as actions from "../actions/actions";

const initialState = {
    users : [],
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
                users: action.response.data,
                isFetching: false
            };
        case actions.USERS.FAILURE:
            return Object.assign({}, state, {
                errorMessage: action.errorMessage,
                isFetching: false
            });
        default:
            return state
    }
};

export default users;