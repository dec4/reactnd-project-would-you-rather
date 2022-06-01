export const NEW_QUESTION = 'NEW_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function addNewQuestion (question) {
  return {
    type: NEW_QUESTION,
    question,
  }
}

export function answerQuestion ({qid, answer}) {
  return {
    type: NEW_QUESTION,
    qid, 
    answer,
  }
}

// TODO: thunk actions