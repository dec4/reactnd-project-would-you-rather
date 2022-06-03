import { Component } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    return (
      <div>
        <h3 className="Title">Leaderboard</h3>
        <ol>
          {this.props.userIds.map((uid) => (
            <li key={uid}>
              <p>{uid}</p>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  let userScore = (id) =>
    Object.keys(users[id].answers).length + users[id].questions.length;

  return {
    userIds: Object.keys(users).sort((a, b) => userScore(b) - userScore(a)),
  };
}

export default connect(mapStateToProps)(Leaderboard);
