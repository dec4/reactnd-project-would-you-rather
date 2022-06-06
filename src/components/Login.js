import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  handleClick = (id) => {
    console.error("chose", id);
    this.props.dispatch(setAuthedUser(id));
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h3 className="Title">Login (Select User)</h3>

        {this.props.userIds.map((uid) => (
          <button
            className="btn"
            type="user"
            onClick={() => this.handleClick(uid)}
          >
            {uid}
          </button>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { userIds: Object.keys(users) };
}

export default withRouter(connect(mapStateToProps)(Login));
