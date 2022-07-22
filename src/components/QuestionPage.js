import Question from "./Question";

const QuestionPage = ({ match }) => (
    <div>
        <h3 className="Title">Would You Rather...</h3>
        <Question qid={match.params.qid} showDetails={true} />
    </div>
)

export default QuestionPage;
