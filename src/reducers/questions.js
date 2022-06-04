import { RECEIVE_QUESTIONS } from "../actions/questions";
import { ANSWER_QUESTION, NEW_QUESTION } from "../actions/shared";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case NEW_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };
    case ANSWER_QUESTION:
      // TODO
      return state;
    default:
      return state;
  }
}
