import React, { Component } from "react";

import "../App.css";

class NavigationButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navigation">
        <a href="" className="links">
          {this.props.children}
        </a>
      </div>
    );
  }
}

export default NavigationButton;
