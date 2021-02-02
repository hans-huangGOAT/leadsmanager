import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Alerts from "./layout/Alerts";
import Dashboard from "./leads/Dashboard";
import { Provider } from "react-redux";
import store from "../store";
import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: positions.TOP_CENTER,
};

function App() {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Fragment>
          <Header />
          <Alerts />
          <div className="container">
            <Dashboard />
          </div>
        </Fragment>
      </AlertProvider>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
