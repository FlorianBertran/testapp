import React, { Component } from "react";
import NavigationButton from "./NavigationButton";
import "../App.css";

class NavBarAdmin extends Component {
  render() {
    return (
      <div className="navigationBar">
        <NavigationButton>
          <text>Leerkrachten</text>
        </NavigationButton>
        <NavigationButton>
          <text>Klassen</text>
        </NavigationButton>
        <NavigationButton>
          <text>Leerlingen</text>
        </NavigationButton>
        <NavigationButton>
          <text>Modules</text>
        </NavigationButton>
      </div>
    );
  }
}
export default NavBarAdmin;
