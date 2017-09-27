import React, { Component } from 'react';
import { Field } from 'redux-form';
import Spinner from '../Common/Spinner';
import fieldDecorator from '../Common/field-decorator';

import './project-form.scss';

export default class ProjectEdit extends Component {
    componentWillMount() {
        this.props.match.params.projectId ? this.props.getProject(this.props.match.params.projectId) : false;
        this.props.getUsers({per_page: 999999});
    }

    render() {
        const {isFetching, handleSubmit, users, initialValues, error } = this.props;
        const onSubmit = this.props.match.params.projectId ? this.props.onSubmitUpdate : this.props.onSubmitCreate;
        const usersArray = users.data ? users.data : null;
        return (
            <div className="loginscreen animated fadeInDown col-md-offse col-lg-offset-4 col-md-4">
                <div className="ibox float-e-margins">
                    <div className="ibox-title">
                        <h5>Title...</h5>
                    </div>
                    <div className="ibox-content">
                        <Spinner isFetching={isFetching} />
                        <form onSubmit={handleSubmit(onSubmit)} className="m-t">
                            <Field name="user_id" component="select" className="form-control m-b">
                                <option value="">Select a user...</option>
                                {
                                    usersArray ? usersArray.map(user =>
                                    <option value={user.id} key={user.id}>
                                        {user.name}
                                    </option>
                                ) : false}
                            </Field>

                            <Field label="Project name" name="name" className="form-control" component={fieldDecorator} type="text"
                                   placeholder="Project Name" />

                            <Field name="restrict_ip" className="form-control" component={fieldDecorator} type="text" label="Restrict IP"
                                   placeholder="Restrict IP" />

                            <Field name="script_url" className="form-control" component={fieldDecorator} type="text"
                                   placeholder="Script URL" label="Script URL" />

                            <Field name="script_version" className="form-control" component={fieldDecorator} type="text"
                                   placeholder="Script version" label="Script version"/>

                            <Field name="host" className="form-control" component={fieldDecorator} type="text"
                                   placeholder="Host" label="Host" />

                            <Field name="platform_name" className="form-control" component={fieldDecorator} type="text"
                                   placeholder="Platform name" label="Platform name"/>

                            <Field name="platform_version" className="form-control" component={fieldDecorator} type="text"
                                   placeholder="Platform version" label="Platform version"/>

                            <Field name="is_active" className="form-control" component={fieldDecorator}
                                   style={{width: '10%'}} type="checkbox" label="Is active?" />

                            <button type="submit" className="btn btn-primary center-block m-b">
                                <i className="fa fa-save m-r-xs"> </i>
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

