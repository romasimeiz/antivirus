import { connect } from 'react-redux';
import * as AppActions from '../actions/actions';
import Dialog from '../components/Dialog';

const mapStateToProps = state => ({
    ...state.dialog
});

const mapDispatchToProps = (dispatch) => {
    return {
        show() {
            dispatch(AppActions.dialog.show());
        },
        hide() {
            dispatch(AppActions.dialog.hide());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);