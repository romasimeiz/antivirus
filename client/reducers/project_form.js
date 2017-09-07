import * as actions from "../actions/actions";

const initialState = {
    project : {},
    users: {}
};

const projectForm = (state = initialState, action) => {
    console.log(action.response);
    switch (action.type) {
        case actions.PROJECT_FORM.SUCCESS:
            return {
                ...state,
                project: action.response.project,
                users: action.response.users,
                isFetching: false
            };
        case actions.PROJECT_FORM.FAILURE:
            return {
                ...state,
                errorMessage: action.errorMessage,
                isFetching: false
            };

        case actions.PROJECT_FORM.REQUEST:
            return {
                ...state,
                isFetching: false
            };
        case actions.PROJECT_FORM.SUBMIT:
            return {
                ...state,
                isFetching: false
            };
        default:
            return state
    }
};

export default projectForm;