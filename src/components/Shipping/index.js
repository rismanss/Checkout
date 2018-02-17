import React, { Component } from 'react';
import './shipping.css';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import validate from '../validate';
import { connect } from 'react-redux';

class Shipping extends Component {
  render() {
    console.log(this.props.all);
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
      dropshipperPhone
    } = this.props;
    console.log(name);
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
            <p>inputan</p>
          </div>
          <hr className="garis" />
          <form onSubmit={handleSubmit}>
            <button className="prev" onClick={this.props.previousStep}>
              Prev
            </button>
            <button className="next" type="submit">
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
  return {
    name,
    phone,
    email,
    address,
    dropshipperName,
    dropshipperPhone
  };
})(Shipping);

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(Shipping);
