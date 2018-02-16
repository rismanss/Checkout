import React, { Component } from "react";
import './info.css';
import Dropshipper from "./dropshipper";

class Info extends Component {
  render() {
    return (
      <div className="wrap">
        <h2 className="name">information</h2>
        <div className="box">
          <Dropshipper />
          <div className="group-info">
            <div className="label-info">
              <label >Name</label>
            </div>
            <input type="text" />
          </div>
          <div className="group-info">
            <div className="label-info">
              <label >Phone Number</label>
            </div>
            <input type="number" />
          </div>
          <div className="group-info">
            <div className="label-info">
              <label >Address</label>
            </div>
            <textarea rows="4"></textarea>
          </div>
          <div className="group-info">
            <div className="label-info">
              <label >Email</label>
            </div>
            <input type="email" />
          </div>
          <hr className="garis" />
          <button className="next" onClick={this.props.nextStep}>Next</button>
        </div>
      </div>
    );
  }
}

export default Info;
