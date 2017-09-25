import { connect } from 'react-redux';

import Example from '../components/Base/BaseGrid';
import * as AppActions from '../actions/actions';

const mapStateToProps = state => ({
    title: 'Example',
    type: 'projects',
    fields: state.projects.projectsGrid,
    data: state.projects.projects
});

const mapDispatchToProps = (dispatch) => {
    return {
        getData(page, sort) {
            dispatch(AppActions.projects.request({
                page:page,
                sort:sort
            }));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);