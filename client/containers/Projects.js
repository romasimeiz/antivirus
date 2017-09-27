import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Projects from '../components/Projects';
import * as AppActions from '../actions/actions';

const mapStateToProps = state => ({
    title: 'Projects',
    type: 'projects',
    fields: state.projects.projectsGrid,
    sortFields: ['id'],
    data: state.projects.projects,
    isFetching: state.projects.isFetching
});

const mapDispatchToProps = (dispatch) => {
    return {
        getData(page, sort) {
            dispatch(AppActions.projects.request({
                page:page,
                sort:sort
            }));
        },
        pushToRoute(route) {
            dispatch(push(route));
        },
        dialogShow(title, confirm) {
            dispatch(AppActions.dialog.show({title: title, confirm: confirm}));
        },
        deleteProject(id) {
            dispatch(AppActions.projectsDelete.request(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);