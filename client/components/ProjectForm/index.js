import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import Spinner from '../Common/Spinner';
import './project-form.scss';

export default class ProjectForm extends Component {
    componentWillMount() {
        this.props.getProject(this.props.match.params.projectId);
    }

    render() {
        const {isFetching, handleFormSubmit, handleSubmit, users, project  } = this.props;
        const usersArray = users.data ? users.data.data : null;
        return (
            <div className="middle-box loginscreen animated fadeInDown">
                <Spinner isFetching={isFetching} />
                <form onSubmit={handleSubmit(handleFormSubmit, project.id)} className="m-t">
                    <Field name="user_id" component="select" className="form-control m-b">
                        <option value="">Select a user...</option>
                        {
                            usersArray ? usersArray.map(user =>
                            <option value={user.id} key={user.id}>
                                {user.name}
                            </option>
                        ) : false}
                    </Field>
                    <div className="form-group">
                        <label className="control-label">Project name</label>
                        <Field name="name" className="form-control" component="input" type="text"
                               placeholder="Project Name"
                               />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Restrict IP</label>
                        <Field name="restrict_ip" className="form-control" component="input" type="text"
                               placeholder="Restrict IP"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Script URL</label>
                        <Field name="script_url" className="form-control" component="input" type="text"
                               placeholder="Script URL"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Script version</label>
                        <Field name="script_version" className="form-control" component="input" type="text"
                               placeholder="Script version"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Host</label>
                        <Field name="host" className="form-control" component="input" type="text"
                               placeholder="Host"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Platform name</label>
                        <Field name="platform_name" className="form-control" component="input" type="text"
                               placeholder="Platform name"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Platform version</label>
                        <Field name="platform_version" className="form-control" component="input" type="text"
                               placeholder="Platform version"/>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Is active</label>
                        <Field name="is_active" className="form-control" component="input" style={{width: '10%'}} type="checkbox"
                               />
                    </div>
                    <button type="submit" className="btn btn-primary block full-width m-b">Save</button>
                </form>
            </div>
        );
    }
}

