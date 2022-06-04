import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    loggedIn: false,
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log('chose', e.target.value)
    setAuthedUser(e.target.value)
    this.setState({
      loggedIn: true,
    });
  }

  render() {
    console.log('LOGIN PAGE')
    return (
      <div>
        {this.state.loggedIn && <Redirect to="/" />}
        <h3 className="Title">Login (Select User)</h3>
        <form>
          {this.props.userIds.map((uid) => (
            <button
              className="btn"
              type="user"
              onClick={this.handleClick}
            >
              {uid}
            </button>
          ))}
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return { userIds: Object.keys(users) }
}

export default connect(mapStateToProps)(Login)