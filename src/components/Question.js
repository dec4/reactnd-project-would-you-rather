import { Component } from "react";
import { connect } from "react-redux";

class Question extends Component {
  handleClick = (e) => {
    console.log(e.target.name, "clicked!");
  };

  render() {
    const { question, answeredByUser, userAnswer } = this.props;
    return (
      <div className="question-card">
        {Boolean(answeredByUser) && (
          <div>
            <span
              style={{
                textDecoration:
                  userAnswer === "optionOne" ? "line-through" : "none",
              }}
            >
              {question.optionOne.text}
            </span>
            <span>&nbsp;OR&nbsp;</span>
            <span
              style={{
                textDecoration:
                  userAnswer === "optionTwo" ? "line-through" : "none",
              }}
            >
              {question.optionTwo.text}
            </span>
          </div>
        )}

        {!Boolean(answeredByUser) && (
          <form>
            <input
              type="radio"
              id={question.id + "-option1"}
              name="answer"
              value={question.optionOne.text}
            />
            <label htmlFor={question.id + "-option1"}>
              {question.optionOne.text}
            </label>
            <span>&nbsp;OR&nbsp;</span>
            <input
              type="radio"
              id={question.id + "-option2"}
              name="answer"
              value={question.optionTwo.text}
            />
            <label htmlFor={question.id + "-option2"}>
              {question.optionTwo.text}
            </label>
            <br></br>
            {/* TODO: add submit button to confirm user selection? */}
          </form>
        )}
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { qid }) {
  const question = questions[qid];
  const user = users[authedUser];
  const answeredByUser = question.id in user.answers;
  return {
    question,
    answeredByUser,
    userAnswer: answeredByUser ? user.answers[question.id] : null,
  };
}

export default connect(mapStateToProps)(Question);
