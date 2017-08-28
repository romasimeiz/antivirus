import { connect } from 'react-redux';

import Home from '../components/Home/Home';

const mapStateToProps = state => ({
    fields : state.auth.clientsGrid
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);