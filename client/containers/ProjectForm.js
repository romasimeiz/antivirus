import { connect } from 'react-redux';
import * as AppActions from '../actions/actions';
import ProjectForm from '../components/ProjectForm';
import { reduxForm } from 'redux-form';
import projectForm from '../reducers/project_form';


const ProjectFormContainer = reduxForm({
    form: 'project-form',
})(ProjectForm);

const mapStateToProps = (state) => {
    return {
        project:       state.projectForm.project,
        users:         state.users.users,
        isFetching:    state.auth.isFetching,
        initialValues: state.projectForm.project.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: projectForm,

        onSubmit: (values) => {
            dispatch(AppActions.projectForm.submit(values));
        },

        getProject(projectId) {
            dispatch(AppActions.projectForm.request(projectId))
        },

        getUsers() {
            dispatch(AppActions.users.request())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectFormContainer);