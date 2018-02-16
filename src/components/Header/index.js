import React, { Component } from "react";
import './header.css';

class Header extends Component {
  handleValid() {
    switch (this.props.step) {
      case 1:
        return (<ul className="step"><li className="active"><span>information</span></li>
          <li><span>shipping</span></li>
          <li><span>confirmation</span></li></ul>);
      case 2:
        return (<ul className="step"><li className="completed"><span>information</span></li>
          <li className="active"><span>shipping</span></li>
          <li><span>confirmation</span></li></ul>);
      case 3:
        return (<ul className="step"><li className="completed"><span>information</span></li>
          <li className="completed"><span>shipping</span></li>
          <li className="active"><span>confirmation</span></li></ul>);
    }
  }
  render() {
    console.log(this.props.step, "step");
    return (
      <div>
        <div>
          <h1>Checkout</h1>
          {this.handleValid()}
        </div>
      </div>
    );
  }
}

export default Header;
