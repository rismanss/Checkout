import React, { Component } from "react";
import './confirm.css';

class Confirm extends Component {
  render() {
    return (
      <div className="wrap">
        <h2 className="name">Confirmation</h2>
        <div className="box">
          <p>isi data information</p>
          <hr className="garis" />
          <p>isi data dari shipping</p>
          <hr className="garis" />
          <button className="prev" onClick={this.props.previousStep}>Prev</button>
          <button className="next">Finish</button>
        </div>
      </div>
    );
  }
}

export default Confirm;
