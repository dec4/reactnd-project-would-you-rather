import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reducer from "./reducers";
import middleware from "./middleware";
import { createStore } from "redux"; // TODO: try redux toolkit
import { Provider } from "react-redux";

const store = createStore(reducer, middleware);

const rootNode = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootNode
);
