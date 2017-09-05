import { connect } from 'react-redux';

import Projects from '../components/Projects';
import * as AppActions from '../actions/actions';

const mapStateToProps = state => ({
    fields : state.projects.projectsGrid,
    projects : state.projects.projects
});

const mapDispatchToProps = (dispatch) => {
    return {
        getProjects() {
            dispatch(AppActions.projects.request());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);