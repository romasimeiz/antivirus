import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Projects from '../components/Projects';
import * as AppActions from '../actions/actions';

const mapStateToProps = state => ({
    fields: state.projects.projectsGrid,
    projects: state.projects.projects,
    pagesCount: state.projects.pagesCount,
    actions: state.projects.actions
});

const mapDispatchToProps = (dispatch) => {
    return {
        getProjects(page) {
            const toPage = page ? page : 1;
            dispatch(AppActions.projects.request(toPage));
        },
        pushToRoute(route) {
            dispatch(push(route));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);