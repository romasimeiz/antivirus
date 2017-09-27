import { connect } from 'react-redux';
import Users from '../components/Users';
import * as AppActions from '../actions/actions';

const mapStateToProps = state => ({
    title: 'Users',
    type: 'users',
    fields : state.users.usersGrid,
    data : state.users.users,
    isFetching: state.users.isFetching
});

const mapDispatchToProps = (dispatch) => {
    return {
        getData(data) {
            dispatch(AppActions.users.request({
                page: data.page,
                sort: data.sort
            }));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);