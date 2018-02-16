import React, { Component } from "react";
import Header from '../Header';
import Info from '../Info';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="index">
        <Header />
        <Info />
      </div>
    );
  }
}

export default Home;
