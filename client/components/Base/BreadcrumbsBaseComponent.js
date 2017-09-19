import React, { Component } from 'react';

export default class BreadcrumbsBaseComponent extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     breadcrumbs: []
        // }
    }

    getBreadcrumbs(breadcrumbs) {
        return(
            <div>
                <ol className="breadcrumbs">
                {
                    breadcrumbs.map( (value, index) => {
                        return <li key={index}>{value}</li>
                    })
                }
                </ol>
            </div>
        )
    }
}