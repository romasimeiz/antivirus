import React, { Component } from 'react';

import './style.scss';
import {Breadcrumbs} from 'react-breadcrumbs-dynamic'
// const routes = [
//     {
//         path: '/users',
//         name: 'Users',
//     },
//     {
//         path: '/projects',
//         name: 'Projects',
//     }];

var userlist = [
    {id:"1", name:"John"},
    {id:"2", name:"Rambo"},
];

export default class PageHeading extends Component {
    render() {
        return (
            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-lg-10">
                    <h2>{this.props.title ? this.props.title : ''}</h2>
                    <ol className="breadcrumb">
                        <Breadcrumbs
                            separator={<b> / </b>}
                            finalItem={'b'}
                        />
                        {/*<li>*/}
                            {/*<a href="/">Home</a>*/}
                        {/*</li>*/}
                        {/*<li className="active">*/}
                            {/*<strong>Current page</strong>*/}
                        {/*</li>*/}
                    </ol>
                </div>
                <div className="col-lg-2">
                </div>
            </div>
        )
    }
}