import React from "react";
import Form from "./Form";
import List from "./List";
import "../css/App.css";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2 className="titel">Form</h2>
      <Form />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2 className="titel">Users</h2>
      <List />
    </div>
  </div>
);

export default App;
