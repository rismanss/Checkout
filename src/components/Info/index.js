import React, { Component } from 'react';
import './info.css';
import Dropshipper from './dropshipper';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import renderField from '../renderField';
import validate from '../validate';
import textarea from '../textarea';
import { connect } from 'react-redux';
import values from 'redux-form/lib/values';

class Info extends Component {
  render() {
    const { handleSubmit, pristine, submitting, address } = this.props;
    const length = address ? 120 - address.length : 120;
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
              <div className="count">
                count :
                {length < 0 ? 'max 120 !!!' : length}
              </div>
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

const selector = formValueSelector('wizard');
Info = connect(state => {
  const address = selector(state, 'address');
  return {
    address
  };
})(Info);

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
  fields: ['pricejne', 'pricegs', 'pricesc', 'ejne', 'egs', 'esc'],
  initialValues: {
    pricejne: 15000,
    pricegs: 35000,
    pricesc: 10000,
    ejne: '2 days',
    egs: 'Half day',
    esc: '1 day'
  }
})(Info);
