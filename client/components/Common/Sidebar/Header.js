import React, {Component, PropTypes} from 'react';

export default class GridHeader extends Component {
    static propTypes = {
        url: PropTypes.string,
        name: PropTypes.string
    };

    render() {
        return (
            <div className="avatar col-xs-12">
                <div className="col-xs-4">
                    <img width="40" height="40" className="img-circle" src={this.props.url}/>
                </div>
                <div className="name col-xs-4">
                    {this.props.name}
                </div>
            </div>
        );
    }
}

GridHeader.displayName = 'GridHeader';