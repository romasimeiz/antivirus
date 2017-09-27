import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { SpinnerWave } from '../Common/Spinner';
import './login.scss';

export default class Login extends Component {
    render() {
        const {handleSubmit, handleFormSubmit, isFetching} = this.props;

        return (
            <div className="middle-box text-center loginscreen animated fadeInDown">
                <div className="ibox-content">
                    <SpinnerWave show={ isFetching } />
                    <form onSubmit={handleSubmit(handleFormSubmit)} className="m-t">
                        <div className="form-group">
                            <Field name="email" className="form-control" component="input" type="text"
                                   placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <Field name="password" className="form-control" component="input" type="password"
                                   placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary block full-width m-b">Login</button>
                    </form>
                    <Link className="forgot-pass-link" to="/forgot-password">Forgot Password?</Link>
                </div>
            </div>
        );
    }
}

