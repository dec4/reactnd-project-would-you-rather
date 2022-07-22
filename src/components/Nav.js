import { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const navlink_style = {
  color: "white",

}

class Nav extends Component {
  logoutClick = () => {
    this.props.dispatch(setAuthedUser(""));
  };

  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" exact style={navlink_style}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" style={navlink_style}>
              Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/new" style={navlink_style}>
              New Question
            </NavLink>
          </li>
        </ul>
        <button onClick={this.logoutClick} className="logout-button">
          Logout {this.props.authedUser}
        </button>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return { authedUser };
}

export default connect(mapStateToProps)(Nav);
