import React, { Component } from "react";

import "../../App.css";
import LogoCodefever from "../Images/LogoCodefever.jpeg";

class Header extends Component {
  render() {
    return <img className="logo" src={LogoCodefever} alt="Logo Codefever" />;
  }
}

export default Header;
