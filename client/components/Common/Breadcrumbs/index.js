import React, { Component } from 'react';
import urls from '../../../router/breadcrumbs';
import {NavLink} from 'react-router-dom';

export default class Breadcrumbs extends Component {

    render() {
        const {router} = this.props;
        let breadcrumbs = [{title: 'Home'}];
        let parameter = null;
        urls.map( (value) => {
            let matches = value.regexp.exec(router.location.pathname) ;
            if(matches !== null) {
                breadcrumbs = value.breadcrumbs;
                parameter = matches[1];
            }
        });

        return (
            <ol className="breadcrumb">
                {
                    breadcrumbs.map((value, index) => {
                        value.title = parameter ? value.title.replace('{parameter}', parameter) : value.title;
                        return (
                            <li key={index}>
                            {

                                value.url ?
                                    <NavLink to={value.url}> {value.title} </NavLink>
                                        :
                                    value.title
                            }
                            </li>
                        )
                    })
                }
            </ol>
        )
    }
}