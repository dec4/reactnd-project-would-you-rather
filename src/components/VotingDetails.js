import { Component } from "react";

class VotingDetails extends Component {
    render() {
        const { question } = this.props;
        const optionOneVotes = question.optionOne.votes.length;
        const optionTwoVotes = question.optionTwo.votes.length;
        const total = optionOneVotes + optionTwoVotes;

        return (
            <div className="center voting-details">
                <h4>Overall Response Data</h4>
                <p>{question.optionOne.text}: {optionOneVotes} vote(s) ({parseFloat(optionOneVotes / total * 100).toFixed(1)}%)</p>
                <p>{question.optionTwo.text}: {optionTwoVotes} vote(s) ({parseFloat(optionTwoVotes / total * 100).toFixed(1)}%)</p>
            </div>
        )
    }
}

export default VotingDetails;
