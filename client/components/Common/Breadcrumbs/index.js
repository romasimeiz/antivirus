import React, { Component } from 'react';
import urls from '../../../router/breadcrumbs';
import {NavLink} from 'react-router-dom';

export default class Breadcrumbs extends Component {
    render() {

        let {router} = this.props;
        let breadcrumbs = [{title: 'Home'}];
        let parameter = null;
        let urlsArray = urls;

        console.log(urlsArray, urlsArray[2].regexp.test('/projects'));
        urlsArray.map( (value) => {
            let matches = router.location.pathname.match(value.regexp);
            // console.log(matches);
            if(matches) {
                breadcrumbs = value.breadcrumbs;
                parameter = value.regexp.exec(router.location.pathname)[1];
            }
        });

        return (
            <ol className="breadcrumb">
                {
                    breadcrumbs.map((value, index) => {
                        let title = parameter ? value.title.replace('{parameter}', parameter) : value.title;
                        return (
                            <li key={index}>
                            {

                                value.url ?
                                    <NavLink to={value.url}> {title} </NavLink>
                                        :
                                    title
                            }
                            </li>
                        )
                    })
                }
            </ol>
        )
    }
}