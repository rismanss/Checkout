import React from 'react';

const textarea = ({
  input,
  label,
  textarea,
  type,
  meta: { touched, error }
}) => (
  <div>
    {/* <label>{label}</label> */}
    <textarea {...input} placeholder={label} type={type} />
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

export default textarea;
