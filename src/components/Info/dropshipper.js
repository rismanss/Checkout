import React, { Component } from "react";

class Dropshipper extends Component {
  render() {
    return (
      <div className="index-dropshipper">
        <div className="group-dropshipper">
          <input type="checkbox" />
          <label>Send as Dropshipper</label>
        </div>
        <div className="group-dropshipper">
          <input type="text" placeholder="Dropshipper Name" />
        </div>
        <div>
          <input type="number" placeholder="Phone Number" />
        </div>
      </div>
    );
  }
}

export default Dropshipper;
