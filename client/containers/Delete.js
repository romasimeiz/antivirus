import { connect } from 'react-redux';
import * as AppActions from '../actions/actions';
import Delete from '../components/Common/Actions/delete';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProject(projectId) {
            dispatch(AppActions.projectDelete.request(projectId))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Delete);