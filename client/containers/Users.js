import { connect } from 'react-redux';

import Users from '../components/Users';

const mapStateToProps = state => ({
    fields : state.auth.clientsGrid
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Users);