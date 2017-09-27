import React from 'react';
const fieldDecorator = ({style, input, label, type, meta: { touched, error } }) =>
    <div className={error ? 'form-group has-error' : 'form-group' }>
        <label className="control-label">
            {label}
        </label>
        <div>
            <input className="form-control" {...input} placeholder={label} type={type} style={style} />
            {touched &&
            error &&
            <div className="help-block">
            <span>
              {error}
            </span>
            </div>}
        </div>
    </div>;

export default fieldDecorator;