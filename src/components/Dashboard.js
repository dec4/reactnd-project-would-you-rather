import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Dashboard extends Component {
  render() {
    // TODO: toggle/filter answered and unanswered
    return (
      <div>
        <h3 className="Title">Would You Rather...</h3>
        {this.props.questionIds.map((qid) => (
          <Question qid={qid} key={qid} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return { questionIds: Object.keys(questions) };
}

export default connect(mapStateToProps)(Dashboard);
