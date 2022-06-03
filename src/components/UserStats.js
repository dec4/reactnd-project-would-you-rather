import { Component } from "react";
import { connect } from "react-redux"

class UserStats extends Component {
  render() {
    const { authedUser, user } = this.props.user
  
    return (
      // TODO: highlight current user
      
      <p>user: {this.props.user}</p>
    )
  }
}

function mapStateToProps({ users, authedUser }, { uid }) {
  const user = users[uid];
  const { id, name, avatarUrl, answers, questions } = user;

  return {
    authedUser,
    user: user
      ? {
        id,
        name,
        avatarUrl,
        nAnswered: Object.keys(answers).length,
        nAsked: questions.length,
      }
      : null,
  }
}

export default connect(mapStateToProps)(UserStats)