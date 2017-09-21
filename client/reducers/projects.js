import * as actions from "../actions/actions";

const initialState = {
    projects : [],
    pagesCount: 1,
    projectsGrid: [
        {
            name: 'ID',
            className: '',
            mapping: 'id',
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
    actions: {types: ['update', 'delete'], entity: 'projects'}
};

const projects = (state = initialState, action) => {
    switch (action.type) {
        case actions.PROJECTS.REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case actions.PROJECTS.SUCCESS:
            return {
                ...state,
                projects: action.response.projects.data,
                pagesCount: action.response.pagesCount,
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