import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test1: "",
      test2: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { test1, test2 } = this.state;
    const label = this.state.submitted ? <label>test123</label> : null;
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
        {label}
      </div>
    );
  }
}

export default App;
