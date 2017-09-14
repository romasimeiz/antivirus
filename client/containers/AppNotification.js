import { connect } from 'react-redux';
import * as AppActions from '../actions/actions';
import AppNotification from '../components/AppNotification';

const mapStateToProps = state => ({
    notification: state.notification,
});
export default connect(mapStateToProps)(AppNotification);