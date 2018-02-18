import React, { Component } from 'react';
import './shipping.css';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import validate from '../validate';
import { connect } from 'react-redux';
import renderField from '../renderField';

class Shipping extends Component {
  render() {
    const {
      handleSubmit,
      pristine,
      previousPage,
      submitting,
      name,
      phone,
      email,
      address,
      dropshipperName,
      dropshipperPhone,
      service,
      pricejne,
      pricegs,
      pricesc,
      ejne,
      egs,
      esc
    } = this.props;
    return (
      <div className="wrap">
        <h2 className="name">Shipper</h2>
        <div className="box">
          <div className="table">
            <p>Name</p>
            <p style={{ fontWeight: 'bold' }}> {name} </p>
          </div>
          <div className="table">
            <p>Phone Number</p>
            <p style={{ fontWeight: 'bold' }}> {phone} </p>
          </div>
          <div className="table">
            <p>Email</p>
            <p style={{ fontWeight: 'bold' }}> {email} </p>
          </div>
          <div className="table">
            <p>Dropshipper Name</p>
            <p style={{ fontWeight: 'bold' }}> {dropshipperName} </p>
          </div>
          <div className="table">
            <p>Dropshipper Phone</p>
            <p style={{ fontWeight: 'bold' }}> {dropshipperPhone} </p>
          </div>
          <div className="table">
            <p>Address</p>
            <p style={{ fontWeight: 'bold' }}> {address} </p>
          </div>
          <hr className="garis" />
          <div style={{ width: '100%' }}>
            <div className="delivery">
              <div className="label-delivery">
                <label>Delivery Service</label>
              </div>
              <Field name="service" component="select" style={{ width: '20%' }}>
                <option />
                <option value="JNE">JNE</option>
                <option value="Go Send">Go Send</option>
                <option value="Sicepat">Sicepat</option>
              </Field>
            </div>
            {service === 'JNE' && (
              <div>
                <div className="delivery">
                  <div className="label-delivery">
                    <label>Delivery Price</label>
                  </div>
                  <div>{pricejne}</div>
                </div>
                <div className="delivery">
                  <div className="label-delivery">
                    <label>Delivery Estimate</label>
                  </div>
                  <div>{ejne}</div>
                </div>
                <div className="delivery">
                  <div className="label-delivery">
                    <label>Payment Method</label>
                  </div>
                  <div style={{ margin: '0px 15px 15px 15px' }}>
                    <div style={{ float: 'left' }}>
                      <Field
                        name="payment"
                        component={renderField}
                        type="radio"
                        value="Wallet"
                      />
                    </div>
                    <label>Wallet</label>
                  </div>
                  <div className="payment">
                    <div style={{ float: 'left' }}>
                      <input type="radio" value="Bank Transfer" disabled />
                    </div>
                    <label style={{ color: 'lightgray' }}>Bank Transfer</label>
                  </div>
                  <div className="payment">
                    <div style={{ float: 'left' }}>
                      <Field
                        name="payment"
                        component={renderField}
                        type="radio"
                        value="Virtual Account"
                      />
                    </div>
                    <label>Virtual Account</label>
                  </div>
                </div>
              </div>
            )}
            {service === 'Go Send' && (
              <div>
                <div className="delivery">
                  <div className="label-delivery">
                    <label>Delivery Price</label>
                  </div>
                  <div>{pricegs}</div>
                </div>
                <div className="delivery">
                  <div className="label-delivery">
                    <label>Delivery Estimate</label>
                  </div>
                  <div>{egs}</div>
                </div>
                <div className="delivery">
                  <div className="label-delivery">
                    <label>Payment Method</label>
                  </div>
                  <div style={{ margin: '0px 15px 15px 15px' }}>
                    <div style={{ float: 'left' }}>
                      <Field
                        name="payment"
                        component={renderField}
                        type="radio"
                        value="Wallet"
                      />
                    </div>
                    <label>Wallet</label>
                  </div>
                  <div style={{ margin: '0px 15px 15px 192px' }}>
                    <div style={{ float: 'left' }}>
                      <input type="radio" value="Bank Transfer" disabled />
                    </div>
                    <label style={{ color: 'lightgray' }}>Bank Transfer</label>
                  </div>
                  <div style={{ margin: '0px 15px 15px 192px' }}>
                    <div style={{ float: 'left' }}>
                      <input type="radio" value="Virtual Account" disabled />
                    </div>
                    <label style={{ color: 'lightgray' }}>
                      Virtual Account
                    </label>
                  </div>
                </div>
              </div>
            )}
            {service === 'Sicepat' && (
              <div>
                <div className="delivery">
                  <div className="label-delivery">
                    <label>Delivery Price</label>
                  </div>
                  <div>{pricesc}</div>
                </div>
                <div className="delivery">
                  <div className="label-delivery">
                    <label>Delivery Estimate</label>
                  </div>
                  <div>{esc}</div>
                </div>
                <div className="delivery">
                  <div className="label-delivery">
                    <label>Payment Method</label>
                  </div>
                  <div style={{ margin: '0px 15px 15px 15px' }}>
                    <div style={{ float: 'left' }}>
                      <Field
                        name="payment"
                        component={renderField}
                        type="radio"
                        value="Wallet"
                      />
                    </div>
                    <label>Wallet</label>
                  </div>
                  <div style={{ margin: '0px 15px 15px 192px' }}>
                    <div style={{ float: 'left' }}>
                      <Field
                        name="payment"
                        component={renderField}
                        type="radio"
                        value="Bank Transfer"
                      />
                    </div>
                    <label>Bank Transfer</label>
                  </div>
                  <div style={{ margin: '0px 15px 15px 192px' }}>
                    <div style={{ float: 'left' }}>
                      <Field
                        name="payment"
                        component={renderField}
                        type="radio"
                        value="Virtual Account"
                      />
                    </div>
                    <label>Virtual Account</label>
                  </div>
                </div>
              </div>
            )}
          </div>
          <hr className="garis" />
          <form onSubmit={handleSubmit}>
            <button className="prev" onClick={this.props.previousStep}>
              Prev
            </button>
            <button
              className="next"
              type="submit"
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
Shipping = connect(state => {
  const name = selector(state, 'name');
  const phone = selector(state, 'phone');
  const email = selector(state, 'email');
  const address = selector(state, 'address');
  const dropshipperName = selector(state, 'dropshipperName');
  const dropshipperPhone = selector(state, 'dropshipperPhone');
  const service = selector(state, 'service');
  const pricejne = selector(state, 'pricejne');
  const pricegs = selector(state, 'pricegs');
  const pricesc = selector(state, 'pricesc');
  const ejne = selector(state, 'ejne');
  const egs = selector(state, 'egs');
  const esc = selector(state, 'esc');
  return {
    name,
    phone,
    email,
    address,
    dropshipperName,
    dropshipperPhone,
    service,
    pricejne,
    pricegs,
    pricesc,
    ejne,
    egs,
    esc
  };
})(Shipping);

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
})(Shipping);
