import { connect } from 'react-redux';

import Users from '../components/Users';
import * as AppActions from '../actions/actions';

const mapStateToProps = state => ({
    fields : state.users.usersGrid,
    users : state.users.users,
    pagesCount: state.users.pagesCount
});

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers(page) {
            page = page ? page : 1;
            dispatch(AppActions.users.request(page));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);