import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className="Title">Would You Rather...</h3>
        <ul>
          {this.props.questionIds.map((qid) => (
            <li key={qid}>
              <Question qid={qid} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  // TODO: sort by putting unanswered at the top
  return { questionIds: Object.keys(questions) };
}

export default connect(mapStateToProps)(Dashboard);
