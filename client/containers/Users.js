import { connect } from 'react-redux';
import Users from '../components/Users';
import * as AppActions from '../actions/actions';
import queryString from 'query-string';

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
            let params = Object.assign({}, queryString.parse(location.search), data);

            dispatch(AppActions.users.request(params));

            if (Object.keys(params).length > 0) {
                dispatch(AppActions.redirect.go({params: params}));
            }
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);