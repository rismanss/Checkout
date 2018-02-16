import React, { Component } from "react";

class Dropshipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }

    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck() {
    this.setState({
      checked: !this.state.checked
    });
  }
  render() {
    return (
      <div className="index-dropshipper">
        <div className="group-dropshipper">
          <input type="checkbox" onChange={this.handleCheck} />
          <label>Send as Dropshipper</label>
        </div>
        <div className="group-dropshipper">
          <input type="text" placeholder="Dropshipper Name" disabled={!this.state.checked} />
        </div>
        <div>
          <input type="number" placeholder="Phone Number" disabled={!this.state.checked} />
        </div>
      </div>
    );
  }
}

export default Dropshipper;
