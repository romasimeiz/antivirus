import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Projects from '../components/Base/BaseGrid';
import * as AppActions from '../actions/actions';

const mapStateToProps = state => ({
    title: 'Projects',
    type: 'projects',
    fields: state.projects.projectsGrid,
    sortFields: ['id'],
    data: state.projects.projects
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);