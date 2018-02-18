import React, { Component } from 'react';
import './confirm.css';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import validate from '../validate';
import { connect } from 'react-redux';

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      harga: 2000
    };
  }
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
      esc,
      payment
    } = this.props;
    return (
      <div className="wrap">
        <h2 className="name">Confirmation</h2>
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
          {service === 'JNE' && (
            <div>
              <div className="table">
                <p>Delivery Detail</p>
                <p style={{ fontWeight: 'bold' }}> {`${service} - ${ejne}`} </p>
              </div>
              <div className="table">
                <p>Delivery Price</p>
                <p style={{ fontWeight: 'bold' }}> {pricejne} </p>
              </div>
              <div className="table">
                <p>Service Price</p>
                <p style={{ fontWeight: 'bold' }}> {this.state.harga} </p>
              </div>
              <div className="table">
                <p>Total Price</p>
                <p style={{ fontWeight: 'bold' }}>
                  {pricejne + this.state.harga}
                </p>
              </div>
              <div className="table">
                <p>Payment Method</p>
                <p style={{ fontWeight: 'bold' }}> {payment} </p>
              </div>
            </div>
          )}
          {service === 'Go Send' && (
            <div>
              <div className="table">
                <p>Delivery Detail</p>
                <p style={{ fontWeight: 'bold' }}> {`${service} - ${egs}`} </p>
              </div>
              <div className="table">
                <p>Delivery Price</p>
                <p style={{ fontWeight: 'bold' }}> {pricegs} </p>
              </div>
              <div className="table">
                <p>Service Price</p>
                <p style={{ fontWeight: 'bold' }}> {this.state.harga} </p>
              </div>
              <div className="table">
                <p>Total Price</p>
                <p style={{ fontWeight: 'bold' }}>
                  {pricegs + this.state.harga}
                </p>
              </div>
              <div className="table">
                <p>Payment Method</p>
                <p style={{ fontWeight: 'bold' }}> {payment} </p>
              </div>
            </div>
          )}
          {service === 'Sicepat' && (
            <div>
              <div className="table">
                <p>Delivery Detail</p>
                <p style={{ fontWeight: 'bold' }}> {`${service} - ${esc}`} </p>
              </div>
              <div className="table">
                <p>Delivery Price</p>
                <p style={{ fontWeight: 'bold' }}> {pricesc} </p>
              </div>
              <div className="table">
                <p>Service Price</p>
                <p style={{ fontWeight: 'bold' }}> {this.state.harga} </p>
              </div>
              <div className="table">
                <p>Total Price</p>
                <p style={{ fontWeight: 'bold' }}>
                  {pricesc + this.state.harga}
                </p>
              </div>
              <div className="table">
                <p>Payment Method</p>
                <p style={{ fontWeight: 'bold' }}> {payment} </p>
              </div>
            </div>
          )}
          <hr className="garis" />
          <form onSubmit={handleSubmit}>
            <button className="prev" onClick={this.props.previousStep}>
              Prev
            </button>
            <button className="next">Finish</button>
          </form>
        </div>
      </div>
    );
  }
}

const selector = formValueSelector('wizard');
Confirm = connect(state => {
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
  const payment = selector(state, 'payment');
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
    esc,
    payment
  };
})(Confirm);

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(Confirm);
