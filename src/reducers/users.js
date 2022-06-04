import { ANSWER_QUESTION, NEW_QUESTION } from "../actions/shared";
import { RECEIVE_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case NEW_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat(question.id),
        },
      };
    case ANSWER_QUESTION:
      // TODO
      return state;
    default:
      return state;
  }
}
