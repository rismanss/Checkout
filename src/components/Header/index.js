import React, { Component } from "react";
import './style.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="index">
          <h1>Checkout</h1>
          <ul className="step">
            <li className="completed"><span>information</span></li>
            <li className="active"><span>shipping</span></li>
            <li><span>confirmation</span></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;