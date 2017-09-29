import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Projects from '../components/Projects';
import * as AppActions from '../actions/actions';
import queryString from 'query-string';

const mapStateToProps = state => ({
    title: 'Projects',
    type: 'projects',
    fields: state.projects.projectsGrid,
    sortFields: ['id', 'name', 'user.name'],
    data: state.projects.projects.data,
    dataTotal: state.projects.projects.total,
    dataPerPage: state.projects.projects.per_page,
    isFetching: state.projects.isFetching
});

const mapDispatchToProps = (dispatch) => {
    return {
        getData(data = {}) {
            let params = Object.assign({}, queryString.parse(location.search), data);

            dispatch(AppActions.projects.request(params));

            if (Object.keys(params).length > 0) {
                dispatch(AppActions.redirect.go({params: params}));
            }
        },
        dialogShow(content, confirm) {
            dispatch(AppActions.dialog.show({content: content, confirm: confirm}));
        },
        deleteProject(id) {
            dispatch(AppActions.projectsDelete.request(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);