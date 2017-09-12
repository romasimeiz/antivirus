import { connect } from 'react-redux';
import * as AppActions from '../actions/actions';
import AppNotification from '../components/AppNotification';

const mapStateToProps = state => ({
    notification: state.notification,
});

const mapDispatchToProps = dispatch => {
        return {
            hideMessage() {
                dispatch(AppActions.logout.success({'isActive' : false}))
            }
        }
    };

export default connect(mapStateToProps, mapDispatchToProps)(AppNotification);