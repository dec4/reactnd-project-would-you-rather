import { Component } from "react";
import { connect } from "react-redux"

class Question extends Component {
  render() {
    return (
      <p>qid: {this.props.qid}</p>
    )
  }
}

export default connect()(Question)