import React, { Component, PropTypes } from 'react';
import Header from './Header';
import './style.scss';
import Row from './Row';

const {string, shape, arrayOf} = PropTypes;

export default class Sidebar extends Component {
    static propTypes = {
        user: PropTypes.object,
        fields: arrayOf(shape({
            name: string,
            className: string
        })).isRequired
    };

    render() {
        return (
            <div className="sidebar">
                <Header url={this.props.user.photo} name={this.props.user.name}/>
                <div className="col-xs-12">
                    <ul>
                        <div className="sidebar-header">PAGES</div>
                        {
                            this.props.fields.map((field, index) => {
                                return (
                                    <Row
                                        name={field.name}
                                        key={`th${index}`}
                                        className={field.className}
                                    />
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
Sidebar.displayName = 'Sidebar';