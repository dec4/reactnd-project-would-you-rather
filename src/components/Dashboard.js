import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Dashboard extends Component {
  state = {
    showAnswered: this.props.showAnswered,
  };

  handleToggle = (e) => {
    e.preventDefault();
    if (this.state.showAnswered) {
      this.props.history.push('/')
    } else {
      this.props.history.push('/answered');
    }
    this.setState((prevState) => ({
      showAnswered: !prevState.showAnswered,
    }));
  };

  render() {
    const { showAnswered } = this.state;
    const { answered, unanswered } = this.props;
    const questionIds = showAnswered ? answered : unanswered;
    return (
      <div>
        <h3 className="Title">Would You Rather...</h3>
        <button className="center dashboard-toggle" onClick={this.handleToggle}>
          {showAnswered ? "Show Unanswered" : "Show Answered"}
        </button>
        {questionIds.map((qid) => (
          <Question qid={qid} key={qid} showDetails={false} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }, { showAnswered }) {
  const authedUserObj = users[authedUser];
  var answered = [];
  var unanswered = [];
  Object.keys(questions).forEach((qid) => {
    if (Object.keys(authedUserObj["answers"]).includes(qid)) {
      answered.push(qid);
    } else {
      unanswered.push(qid);
    }
  });
  return {
    answered,
    unanswered,
    showAnswered
  };
}

export default connect(mapStateToProps)(Dashboard);
