import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoadingBar from "react-redux-loading";
import "./App.css";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import NewQuestion from "./NewQuestion";
import Nav from "./Nav";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            {this.props.loading === true ? null : this.props.authedUser ===
              "" ? (
              <div>
                <Route path="/login" render={(props) => <Login {...props} />} />
                <Redirect push to="/login" />
              </div>
            ) : (
              <div>
                <Nav />
                <Route
                  path="/"
                  exact
                  render={(props) => <Dashboard {...props} />}
                />
                <Route
                  path="/leaderboard"
                  render={(props) => <Leaderboard {...props} />}
                />
                <Route
                  path="/new"
                  render={(props) => <NewQuestion {...props} />}
                />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
