import * as actions from "../actions/actions";

const initialState = {
    projects : [],
    projectsGrid: [
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
            name: 'User',
            className: '',
            mapping: 'user.name'
        },
        {
            name: 'Script URL',
            className: '',
            mapping: 'script_url'
        }
    ],
};

const projects = (state = initialState, action) => {
    switch (action.type) {
        case actions.PROJECTS.SUCCESS:
            return {
                ...state,
                projects: action.response.data,
                isFetching: false
            };
        case actions.PROJECTS.FAILURE:
            return Object.assign({}, state, {
                errorMessage: action.errorMessage,
                isFetching: false
            });
        default:
            return state
    }
};

export default projects;