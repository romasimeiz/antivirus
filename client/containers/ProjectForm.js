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
        project : state.projectForm.project,
        users : state.projectForm.users,
        isFetching: state.auth.isFetching,
        initialValues: state.projectForm.project.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: projectForm,
        handleFormSubmit(formProps, projectId) {
            dispatch(AppActions.projectForm.submit(formProps, projectId));
        },
        getProject(projectId) {
            dispatch(AppActions.projectForm.request(projectId))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectFormContainer);