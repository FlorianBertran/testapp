import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
<<<<<<< HEAD
//import App from './App';
import App from "./Fien/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
=======
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
>>>>>>> 3073fb9060714e0a59c8dbc891e36cf34e96e9d5

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
