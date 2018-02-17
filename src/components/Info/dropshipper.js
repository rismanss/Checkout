import React, { Component } from 'react';
import renderField from '../renderField';
import { Field, reduxForm } from 'redux-form';
// import renderField from '../renderField';
import validate from '../validate';

class Dropshipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };

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
          <div style={{ width: '25px', float: 'left' }}>
            <Field
              name="dropshipper"
              type="checkbox"
              component={renderField}
              id="Dropshipper"
              onChange={this.handleCheck}
            />
          </div>
          <label>Send as Dropshipper</label>
        </div>
        {this.state.checked ? (
          <div>
            <div className="group-dropshipper">
              <Field
                type="text"
                component={renderField}
                name="dropshipperName"
                label="Dropshipper Name"
              />
            </div>
            <div>
              <Field
                type="text"
                component={renderField}
                name="dropshipperPhone"
                label="Phone Number"
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="group-dropshipper">
              <input type="text" disabled placeholder="Dropshipper Name" />
            </div>
            <div>
              <input type="number" disabled placeholder="Phone Number" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

// export default Dropshipper;
export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true,
  validate
})(Dropshipper);
