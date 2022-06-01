import { NEW_QUESTION, ANSWER_QUESTION } from "../actions/questions";

export default function questions (state = {}, action) {
  switch (action.type) {
    case NEW_QUESTION :
      // TODO
      return state
    case ANSWER_QUESTION :
      // TODO
      return state
    default :
      return state
  }
}