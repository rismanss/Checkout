import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    {/* <label>{label}</label> */}
    <input {...input} placeholder={label} type={type} />
    {touched &&
      error && (
        <span
          style={{
            fontWeight: 'bold',
            padding: '5px',
            color: 'red',
            marginLeft: '10px'
          }}
        >
          {error}
        </span>
      )}
  </div>
);

export default renderField;
