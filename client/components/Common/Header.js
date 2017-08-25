import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return(
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: 0}}>
                    <div className="navbar-header">
                        <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars" /> </a>
                        {/*<form role="search" className="navbar-form-custom" action="http://webapplayers.com/inspinia_admin-v2.5/search_results.html">
                            <div className="form-group">
                                <input type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search" />
                            </div>
                        </form>*/}
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <a onClick={this.props.handleLogout}>
                                <i className="fa fa-sign-out" /> Log out
                            </a>
                        </li>
                        <li>
                            <a className="right-sidebar-toggle">
                                <i className="fa fa-tasks" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }	
}