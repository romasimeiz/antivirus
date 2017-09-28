import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Projects from '../components/Projects';
import * as AppActions from '../actions/actions';

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
            dispatch(AppActions.projects.request(data));
        },
        dialogShow(title, confirm) {
            dispatch(AppActions.dialog.show({title: title, confirm: confirm}));
        },
        deleteProject(id) {
            dispatch(AppActions.projectsDelete.request(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);