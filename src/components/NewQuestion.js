import { Component } from "react";
import { connect } from "react-redux";
import { handleAddNewQuestion } from "../actions/shared";

class NewQuestion extends Component {
  state = {
    option1: "",
    option2: "",
  };

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { option1, option2 } = this.state;
    const { dispatch } = this.props;
    dispatch(handleAddNewQuestion(option1, option2));

    this.setState(() => ({
      option1: "",
      option2: "",
    }));
  };

  render() {
    const { option1, option2 } = this.state;

    return (
      <div>
        <h3 className="Title">New: Would You Rather...</h3>
        <form className="new-question" onSubmit={this.handleSubmit}>
          <input
            name="option1"
            type="text"
            value={option1}
            onChange={this.handleChange}
            placeholder="Option 1"
          />
          <br />
          <input
            name="option2"
            type="text"
            value={option2}
            onChange={this.handleChange}
            placeholder="Option 2"
          />
          <br />
          <button
            className="btn"
            type="submit"
            disabled={option1 === "" || option2 === ""}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
