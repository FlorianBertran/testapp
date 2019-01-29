import React from "react";
import Form from "./Form";
import List from "./List";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Form</h2>
      <Form />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>users</h2>
      <List />
    </div>
  </div>
);

export default App;
