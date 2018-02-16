import React, { Component } from "react";
import Header from '../Header';
import Info from '../Info';
import Shipping from '../Shipping';
import Confirm from '../Confirm';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    }
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  nextStep() {
    this.setState({
      step: this.state.step + 1
    })
  }

  previousStep() {
    this.setState({
      step: this.state.step - 1
    })
  }

  handleStep() {
    switch (this.state.step) {
      case 1:
        return <Info nextStep={this.nextStep} />
      case 2:
        return <Shipping nextStep={this.nextStep} previousStep={this.previousStep} />
      case 3:
        return <Confirm previousStep={this.previousStep} />
    }
  }
  render() {
    return (
      <div className="index">
        <Header step={this.state.step} />
        {this.handleStep()}
      </div>
    );
  }
}

export default Home;
