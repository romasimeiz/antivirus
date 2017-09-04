import { connect } from 'react-redux';
import * as AppActions from '../actions/actions';

import Auth from '../components/auth';


const mapStateToProps = state => ({
    auth: state.auth,
    sideBar: state.auth.sideBar
});

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogout() {
            dispatch(AppActions.logout.request());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);