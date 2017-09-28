import { connect } from 'react-redux';
import Users from '../components/Users';
import * as AppActions from '../actions/actions';

const mapStateToProps = state => ({
    title: 'Users',
    type: 'users',
    fields : state.users.usersGrid,
    sortFields: ['id', 'name', 'email'],
    data: state.users.users.data,
    dataTotal: state.users.users.total,
    dataPerPage: state.users.users.per_page,
    isFetching: state.users.isFetching
});

const mapDispatchToProps = (dispatch) => {
    return {
        getData(data = {}) {
            dispatch(AppActions.users.request(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);