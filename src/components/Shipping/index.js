import React, { Component } from "react";
import './shipping.css';

class Shipping extends Component {
  render() {
    return (
      <div className="wrap">
        <h2 className="name">Shipper</h2>
        <div className="box">
          <p>isi data information</p>
          <hr className="garis" />
          <p>inputan</p>
          <hr className="garis" />
          <button className="prev" onClick={this.props.previousStep}>Prev</button>
          <button className="next" onClick={this.props.nextStep}>Next</button>
        </div>
      </div>
    );
  }
}

export default Shipping;
