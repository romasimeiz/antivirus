import React, { Component } from 'react';
import  {Notification} from 'react-notification'
import './style.scss';

export default class AppNotification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        }
    }

    disableMessage() {
        this.setState( { isActive: false } );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isActive: nextProps.properties.isActive });
    }

    render() {
        const {properties} = this.props;
        return (
            <div>
                <Notification
                    isActive={this.state.isActive}
                    message={properties.message}
                    action={properties.action}
                    title={properties.title}
                    onDismiss={this.disableMessage.bind(this)}
                    dismissAfter={properties.dismissAfter}
                />
            </div>
        );
    }
}