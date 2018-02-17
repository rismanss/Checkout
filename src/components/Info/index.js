import React, { Component } from 'react';
import './info.css';
import Dropshipper from './dropshipper';
import { Field, reduxForm } from 'redux-form';
import renderField from '../renderField';
import validate from '../validate';
import textarea from '../textarea';

class Info extends Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div className="wrap">
        <h2 className="name">information</h2>
        <div className="box">
          <form onSubmit={handleSubmit}>
            <Dropshipper />
            <div className="group-info">
              <div className="label-info">
                <label>Name</label>
              </div>
              <Field name="name" type="text" component={renderField} />
            </div>
            <div className="group-info">
              <div className="label-info">
                <label>Phone Number</label>
              </div>
              <Field name="phone" type="text" component={renderField} />
            </div>
            <div className="group-info">
              <div className="label-info">
                <label>Address</label>
              </div>
              <Field name="address" type="textarea" component={textarea} />
            </div>
            <div className="group-info">
              <div className="label-info">
                <label>Email</label>
              </div>
              <Field name="email" type="email" component={renderField} />
            </div>
            <hr className="garis" />
            <button
              type="submit"
              className="next"
              disabled={pristine || submitting}
            >
              Next
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(Info);
