import { connect } from 'react-redux';
import Users from '../components/Users';
import * as AppActions from '../actions/actions';
import Actions from '../components/Users/actions';

const mapStateToProps = state => ({
    title: 'Users',
    type: 'users',
    fields : state.users.usersGrid,
    data : state.users.users,
    isFetching: state.users.isFetching
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