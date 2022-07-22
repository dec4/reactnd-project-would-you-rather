import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionListItem from "./QuestionListItem";

class Dashboard extends Component {
  state = {
    showAnswered: false,
  };

  handleToggle = () => {
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
        <button onClick={this.handleToggle}>
          {showAnswered ? "Show Unanswered" : "Show Answered"}
        </button>
        {questionIds.map((qid) => (
          <QuestionListItem qid={qid} key={qid} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
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
  };
}

export default connect(mapStateToProps)(Dashboard);
