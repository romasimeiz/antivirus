import React, { Component } from 'react';
import { Field} from 'redux-form';
import { Link } from 'react-router';

import './login.scss';



export default class Login extends Component {

    // renderAlert() {
    //     if (this.props.auth.errorMessage) {
    //         return (
    //             <div>
    //                 <span><strong>Error!</strong> {this.props.auth.errorMessage}</span>
    //             </div>
    //         );
    //     }
    // }

    render() {
        const {handleSubmit, handleFormSubmit} = this.props;
        return (
            <div className="login-page">
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    {/*{this.renderAlert()}*/}
                    <div>
                        <label>Email</label>
                        <Field name="username" className="form-control" component="input" type="text"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <Field name="password" className="form-control" component="input" type="password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                {/*<Link className="forgot-pass-link" to="/forgot-password">Forgot Password?</Link>*/}
            </div>
        );
    }
}

