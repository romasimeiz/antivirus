import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppActions from '../actions/actions';
import Login from '../components/Login/Login';
import { reduxForm } from 'redux-form';

const LoginContainer = reduxForm({
    form: 'login',
})(Login);

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(AppActions, dispatch),
        handleFormSubmit(formProps) {
            AppActions.doLogin(formProps);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);