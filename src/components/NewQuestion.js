import { Component } from "react";

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
    // TODO
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

export default NewQuestion;
