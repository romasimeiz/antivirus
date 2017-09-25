import { connect } from 'react-redux';

import Users from '../components/Base/BaseGrid';
import * as AppActions from '../actions/actions';

const mapStateToProps = state => ({
    title: 'Users',
    type: 'users',
    fields : state.users.usersGrid,
    data : state.users.users
});

const mapDispatchToProps = (dispatch) => {
    return {
        getData(page, sort) {
            dispatch(AppActions.users.request({
                page:page,
                sort:sort
            }));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);