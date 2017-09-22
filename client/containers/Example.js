import { connect } from 'react-redux';

import Example from '../components/Example';
import * as AppActions from '../actions/actions';

const mapStateToProps = state => ({
    fields: state.projects.projectsGrid,
    projects: state.projects.projects,
    pagesCount: state.projects.pagesCount,
    actions: state.projects.actions
});

const mapDispatchToProps = (dispatch) => {
    return {
        getProjects(page, sort) {
            dispatch(AppActions.projects.request({
                page:page,
                sort:sort
            }));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);