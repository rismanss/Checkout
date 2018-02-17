import React, { Component } from 'react';
import './confirm.css';
import { Field, reduxForm } from 'redux-form';
import validate from '../validate';

class Confirm extends Component {
  render() {
    const { handleSubmit, pristine, previousPage, submitting } = this.props;
    return (
      <div className="wrap">
        <h2 className="name">Confirmation</h2>
        <div className="box">
          <p>isi data information</p>
          <hr className="garis" />
          <p>isi data dari shipping</p>
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

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(Confirm);
