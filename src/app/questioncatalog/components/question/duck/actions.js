export const REMOVE_QUESTION = "REMOVE_QUESTION"
export const ADD_QUESTION = "ADD_QUESTION"
export const MOVE_QUESTION = "MOVE_QUESTION"
export const CHANGE_QUESTION_ATTRIBUTE = "CHANGE_QUESTION_ATTRIBUTE"

export const questionActionTypes = {
  REMOVE_QUESTION,
  MOVE_QUESTION,
  CHANGE_QUESTION_ATTRIBUTE,
  ADD_QUESTION
}

export const removeQuestion = uuid => ({
  type: REMOVE_QUESTION,
  payload: { uuid }
})

export const addQuestion = question => ({
  type: ADD_QUESTION,
  payload: { question }
})

export const moveQuestion = (uuid, direction) => ({
  type: MOVE_QUESTION,
  payload: { uuid, direction }
})

export const changeQuestionAttribute = (value, attribute, uuid) => ({
  type: CHANGE_QUESTION_ATTRIBUTE,
  payload: { value, attribute, uuid }
})