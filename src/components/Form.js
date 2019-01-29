import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/actions";

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user))
  };
};
class ConnectedForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test1: "",
      test2: "",
      error: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { test1, test2 } = this.state;
    if (test1 !== "" && test2 !== "") {
      this.props.addUser({ test1, test2 });
      this.setState({ test1: "", test2: "" });
    } else {
      this.setState({ error: "Fill both fields!" });
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { test1, test2, error } = this.state;
    return (
      <div className="App">
        <h2>test</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className="test1">
            <label htmlFor="test1">test1: </label>
            <input
              type="text"
              name="test1"
              value={test1}
              onChange={this.handleChange}
            />
          </div>
          <div className="test2">
            <label htmlFor="test2">test2: </label>
            <input
              type="text"
              name="test2"
              value={test2}
              onChange={this.handleChange}
            />
          </div>
          <div className="button">
            <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
          </div>
        </form>
        <br />
        <div className="error">
          <label>{error}</label>
        </div>
      </div>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
