import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";
import { receiveUsers } from "./users";

export const NEW_QUESTION = "NEW_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

const AUTHED_ID = ""; // temp: sarahedo

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getQuestions(), _getUsers()]).then((values) => {
      dispatch(receiveQuestions(values[0]));
      dispatch(receiveUsers(values[1]));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}

function addNewQuestion(question) {
  return {
    type: NEW_QUESTION,
    question,
  };
}

export function handleAddNewQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => dispatch(addNewQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleAnswerQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    })
      .then(() => dispatch(answerQuestion({ authedUser, qid, answer })))
      .then(() => dispatch(hideLoading()));
  };
}
