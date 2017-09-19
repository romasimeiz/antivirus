import React, { Component } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import './style.scss';
// const routes = [
//     {
//         path: '/users',
//         name: 'Users',
//     },
//     {
//         path: '/projects',
//         name: 'Projects',
//     }];

export default class PageHeading extends Component {
    render() {
        return (
            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-lg-10">
                    <h2>{this.props.title ? this.props.title : ''}</h2>
                    <Breadcrumbs router={this.props.router} breadcrumbs={['Foo', 'Bar', 'Yahoo']} />
                    {/*<ol className="breadcrumb">*/}
                        {/*/!*<Breadcrumbs*!/*/}
                            {/*/!*separator={<b> / </b>}*!/*/}
                            {/*/!*finalItem={'b'}*!/*/}
                        {/*<li>*/}
                            {/*<a href="/">Home</a>*/}
                        {/*</li>*/}
                        {/*<li className="active">*/}
                            {/*<strong>Current page</strong>*/}
                        {/*</li>*/}
                    {/*</ol>*/}
                </div>
                <div className="col-lg-2">
                </div>
            </div>
        )
    }
}