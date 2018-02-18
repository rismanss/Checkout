import React, { Component } from 'react';
import './header.css';
import { reduxForm, formValueSelector } from 'redux-form';
import validate from '../validate';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const {
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
      payment,
      nextStep,
      step
    } = this.props;
    console.log(this.props.step, 'step');
    return (
      <div>
        <h1>Checkout</h1>
        {step === 1 && (
          <ul className="step">
            <li className="active">
              <span>information</span>
            </li>
            <li
              onClick={
                name &&
                phone &&
                email &&
                address &&
                dropshipperName &&
                dropshipperPhone !== undefined
                  ? nextStep
                  : step
              }
            >
              <span>shipping</span>
            </li>
            <li>
              <span>confirmation</span>
            </li>
          </ul>
        )}
        {step === 2 && (
          <ul className="step">
            <li className="completed" onClick={this.props.previousStep}>
              <span>information</span>
            </li>
            <li className="active">
              <span>shipping</span>
            </li>
            <li
              onClick={
                service &&
                pricejne &&
                pricegs &&
                pricesc &&
                ejne &&
                egs &&
                esc &&
                payment !== undefined
                  ? nextStep
                  : step
              }
            >
              <span>confirmation</span>
            </li>
          </ul>
        )}
        {this.props.step === 3 && (
          <ul className="step">
            <li className="completed">
              <span>information</span>
            </li>
            <li className="completed" onClick={this.props.previousStep}>
              <span>shipping</span>
            </li>
            <li className="active">
              <span>confirmation</span>
            </li>
          </ul>
        )}
      </div>
    );
  }
}

const selector = formValueSelector('wizard');
Header = connect(state => {
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
})(Header);

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(Header);
