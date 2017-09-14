import React, { Component } from 'react';
import  {Notification} from 'react-notification'
import './style.scss';

export default class AppNotification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noticeIsActive: false,
        }
    }

    disableMessage() {
        this.setState( { noticeIsActive: false } );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ noticeIsActive: nextProps.properties.isActive });
    }

    render() {
        const {properties} = this.props;
        return (
            <div>
                <Notification
                    isActive={this.state.noticeIsActive}
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