import { connect } from 'react-redux';
import { logout } from "../actions/actions";
import { bindActionCreators } from "redux";
import { push } from "react-router-redux"

import Auth from '../components/auth';


const mapStateToProps = state => ({
    auth: state.auth,
    sideBar: state.auth.sideBar
});

const mapDispatchToProps = (dispatch) => {
    return {
        logout: bindActionCreators(logout, dispatch),
        handleLogout() {
            dispatch(logout());
            dispatch(push('/'));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);