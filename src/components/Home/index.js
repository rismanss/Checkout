import React, { Component } from 'react';
import Header from '../Header';
import Info from '../Info';
import Shipping from '../Shipping';
import Confirm from '../Confirm';
import './home.css';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  nextStep() {
    this.setState({
      step: this.state.step + 1
    });
  }

  previousStep() {
    this.setState({
      step: this.state.step - 1
    });
  }

  render() {
    const { onSubmit } = this.props;
    const { step } = this.state;
    return (
      <div className="index">
        <Header
          step={this.state.step}
          nextStep={this.nextStep}
          previousStep={this.previousStep}
        />
        <div>
          {step === 1 && <Info onSubmit={this.nextStep} />}
          {step === 2 && (
            <Shipping
              previousStep={this.previousStep}
              onSubmit={this.nextStep}
            />
          )}
          {step === 3 && (
            <Confirm previousStep={this.previousStep} onSubmit={onSubmit} />
          )}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Home;
