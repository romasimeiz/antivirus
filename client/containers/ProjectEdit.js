import { connect } from 'react-redux';
import * as AppActions from '../actions/actions';
import ProjectEdit from '../components/ProjectEdit';
import { reduxForm } from 'redux-form';


const ProjectEditContainer = reduxForm({
    form: 'project-edit',
})(ProjectEdit);

const mapStateToProps = (state) => {
    return {
        project:       state.projectEdit.project,
        users:         state.users.users,
        isFetching:    state.auth.isFetching,
        initialValues: state.projectEdit.project.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitUpdate: (values) => {
            dispatch(AppActions.projectEditSubmit.request(values));
        },
        onSubmitCreate: (values) => {
            dispatch(AppActions.projectCreate.request(values));
        },

        getProject(projectId) {
            dispatch(AppActions.projectEdit.request(projectId))
        },

        getUsers(perPage) {
            dispatch(AppActions.users.request(perPage))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEditContainer);