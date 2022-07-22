import { Component } from "react";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/shared";

class QuestionListItem extends Component {
  state = {
    selectedAnswer: "",
  };

  handleChange = (e) => {
    const value = e.target.value;
    const { question } = this.props;
    const selectedAnswer =
      value === question.optionOne.text ? "optionOne" : "optionTwo";

    this.setState({
      selectedAnswer,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { selectedAnswer } = this.state;
    const { question, dispatch } = this.props;
    dispatch(handleAnswerQuestion(question.id, selectedAnswer));

    this.setState({
      selectedAnswer,
    });
  };

  render() {
    const { question, answeredByUser, userAnswer } = this.props;
    return (
      <div className="question-card">
        {Boolean(answeredByUser) && (
          <div>
            <div
              className="option-one"
              style={{
                textDecoration:
                  userAnswer === "optionOne" ? "none" : "line-through",
              }}
            >
              {question.optionOne.text}
            </div>
            <div className="or">&nbsp;OR&nbsp;</div>
            <div
              className="option-two"
              style={{
                textDecoration:
                  userAnswer === "optionTwo" ? "none" : "line-through",
              }}
            >
              {question.optionTwo.text}
            </div>
            <br></br>
            <button
              className="btn center"
            >
              See Details
            </button>
          </div>
        )}

        {!Boolean(answeredByUser) && (
          <form onSubmit={this.handleSubmit}>
            <div className="option-one">
              <input
                type="radio"
                id={question.id + "-option1"}
                name="answer"
                value={question.optionOne.text}
                onChange={this.handleChange}
              />
              <label htmlFor={question.id + "-option1"}>
                {question.optionOne.text}
              </label>
            </div>
            <span className="or">&nbsp;OR&nbsp;</span>
            <div className="option-two">
              <input
                type="radio"
                id={question.id + "-option2"}
                name="answer"
                value={question.optionTwo.text}
                onChange={this.handleChange}
              />
              <label htmlFor={question.id + "-option2"}>
                {question.optionTwo.text}
              </label>
            </div>
            <br></br>
            <button
              className="btn center"
              type="submit"
              disabled={this.state.selectedAnswer === ""}
            >
              Submit
            </button>
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
    userAnswer: answeredByUser ? user.answers[question.id] : "",
  };
}

export default connect(mapStateToProps)(QuestionListItem);
