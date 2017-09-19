import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import _ from 'lodash';

export default class Breadcrumbs extends Component {


            // :
            //     return [{title: 'Home', url:'/home'}, {title: 'Projects', url:'/projects'}, {title: '1'}, {title: 'Update'}];
            // '/projects' :
            //     return [{title: 'Home', url:'/home'}, {title: 'Update'}];


    render() {

        const urls =
        {
            '/projects/\d/update':  [{title: 'Home', url:'/home'}, {title: 'Projects', url:'/projects'}, {title: '1'}, {title: 'Update'}],
            '/projects' : [{title: 'Home', url:'/home'}, {title: 'Projects'}]
        };

        const {router} = this.props;
        let breadcrumbs = _.get(urls, router.location.pathname) ? _.get(urls, router.location.pathname) : [{title: 'Home'}];
        return (
            <ol className="breadcrumb">
                {
                    breadcrumbs.map((value, index) => {
                        return <li key={index}>
                            {
                                value.url ?
                                    <NavLink to={value.url}> {value.title} </NavLink>
                                        :
                                    value.title
                            }
                            </li>
                    })
                }
            </ol>
        )
    }
}