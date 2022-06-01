import { receiveQuestions } from "./questions"
import { setAuthedUser } from "./authedUser"
import { _getQuestions } from "../_DATA"
import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return _getQuestions()
      .then((questions) => {
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}