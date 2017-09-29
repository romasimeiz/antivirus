import * as actions from "../actions/actions";

const initialState = {
    projects : [],
    pagesCount: 1,
    projectsGrid: [
        {
            name: 'ID',
            mapping: 'id'
        },
        {
            name: 'Name',
            mapping: 'name'
        },
        {
            name: 'User',
            mapping: 'user.name'
        },
        {
            name: 'Script URL',
            mapping: 'script_url'
        }
    ]
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

        case actions.PROJECT_DELETE.SUCCESS:
            let newState = state;
            newState.projects.data.map(function (item, key) {
                if (item.id === action.response.data.id) {
                    newState.projects.data[key].is_active = action.response.data.is_active;
                    return false;
                }
            });

            return {
                ...newState,
                isFetching: false
            };
        case actions.PROJECT_DELETE.FAILURE:
            return {
                ...state,
                errorMessage: action.errorMessage,
                isFetching: false
            };
        case actions.PROJECT_DELETE.REQUEST:
            return {
                ...state,
                isFetching: true
            };

        default:
            return state
    }
};

export default projects;