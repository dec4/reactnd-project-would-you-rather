import { Component } from "react";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/shared";

class Question extends Component {
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
            <span
              style={{
                textDecoration:
                  userAnswer === "optionOne" ? "none" : "line-through",
              }}
            >
              {question.optionOne.text}
            </span>
            <span>&nbsp;OR&nbsp;</span>
            <span
              style={{
                textDecoration:
                  userAnswer === "optionTwo" ? "none" : "line-through",
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
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
            <label htmlFor={question.id + "-option2"}>
              {question.optionTwo.text}
            </label>
            <br></br>
            <button
              className="btn"
              type="submit"
              disabled={this.state.selectedAnswer === ""}
              onClick={this.handleSubmit}
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

export default connect(mapStateToProps)(Question);
