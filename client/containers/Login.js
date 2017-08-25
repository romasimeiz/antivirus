import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppActions from '../actions/actions';
import Login from '../components/Login/Login';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import { push, ConnectedRouter } from  'react-router-redux';

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
        actions: bindActionCreators(AppActions, dispatch, history),
        handleFormSubmit(formProps) {
            dispatch(push('home'));
            dispatch(AppActions.receiveLogin(formProps));

        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer));