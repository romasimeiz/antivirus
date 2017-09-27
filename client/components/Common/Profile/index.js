import React, {Component} from 'react';
import fieldDecorator from '../field-decorator';
import { Field } from 'redux-form';
import Dropzone from 'react-dropzone'


import './profile.scss';

export default class Profile extends Component {
    onDropFileHandler(file, userId) {
        cl(file);
        const formData = new FormData();
        formData.append('photo', file);
        cl(formData);
        this.props.onDrop({file: formData, userId, name: file.name});
    }

    render() {
        const {handleSubmit, initialValues, error, onSubmit } = this.props;
        const userId = initialValues ? initialValues.id : 0;
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <h5>Profile Detail</h5>
                        </div>
                        <div>
                            <div className="ibox-content no-padding border-left-right">
                                <img alt="image" className="img-responsive" src={`${API_HOST}${initialValues.photo}`} />
                            </div>
                            <div className="ibox-content profile-content">
                                <form onSubmit={handleSubmit(onSubmit)} className="m-t">
                                    <Field label="Project name" name="name" className="form-control" component={fieldDecorator} type="text"
                                           placeholder="User Name" />

                                    <Field name="email" className="form-control" component={fieldDecorator} type="text" label="Email"
                                           placeholder="Email" />

                                    <Field name="phone" className="form-control" component={fieldDecorator} type="text"
                                           placeholder="Phone" label="Phone" />

                                    <Dropzone
                                        //ref="dropzone"
                                        onDrop={ (file) => this.onDropFileHandler(file[0], userId) }
                                        multiple={false}
                                        accept='image/*'
                                        disablePreview={true}
                                        >
                                        <div>Click here select files to upload.</div>
                                    </Dropzone>

                                    <button type="submit" className="btn btn-primary center-block m-b">
                                        <i className="fa fa-save m-r-xs"> </i>
                                        Save
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Profile.displayName = 'Profile';
// const reader = new FileReader();
// reader.onload = () => {
//     const fileAsBinaryString = reader.result;
// };
//
// reader.onabort = () => console.log('file reading was aborted');
// reader.onerror = () => console.log('file reading has failed');
// reader.readAsBinaryString(file);