import * as actions from "../actions/actions";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || {},
};

/**
 * Roman Yephimov
 * profile update reducer
 * @param state
 * @param action
 * @returns {*}
 */

const profileUpdate = (state = initialState, action) => {
    switch (action.type) {
        case actions.PROFILE_UPDATE.SUCCESS:
            localStorage.setItem('user', JSON.stringify(action.response.user));
            return {
                ...state,
                user: action.response.user,
                isFetching: false
            };
        case actions.PROFILE_UPDATE.FAILURE:
            return {
                ...state,
                errorMessage: action.errorMessage,
                isFetching: false
            };
        case actions.PROFILE_UPDATE.REQUEST:
            return {
                ...state,
                isFetching: true
            };
        default:
            return initialState
    }
};

export default profileUpdate;
