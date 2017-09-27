import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Profile from '../components/Common/Profile';

import * as AppActions from '../actions/actions';

const ProfileUpdateContainer = reduxForm({
    form: 'profile-update',
})(Profile);


const mapStateToProps = state => ({
    initialValues: state.auth.user
});

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (values) => {
            dispatch(AppActions.profileUpdate.request(values));
        },
        onDrop: (file) => {
            dispatch(AppActions.uploadProfilePhoto.request(file));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUpdateContainer);