export const ADD_QUESTION = "ADD_QUESTION"
export const TOGGLE_NEWQUESTION_MODAL = "TOGGLE_NEWQUESTION_MODAL"
export const CHANGE_NEWQUESTION_ATTRIBUTE = "CHANGE_NEWQUESTION_ATTRIBUTE"
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE"

export const newQuestionActionTypes = {
  ADD_QUESTION,
  TOGGLE_NEWQUESTION_MODAL,
  CHANGE_NEWQUESTION_ATTRIBUTE,
  SET_ERROR_MESSAGE
}

export const addQuestion = question => ({
  type: ADD_QUESTION,
  payload: { question }
})

export const toggleNewQuestionModal = value => ({
  type: TOGGLE_NEWQUESTION_MODAL,
  payload: { value }
})

export const changeNewQuestionAttribute = (value, key) => ({
  type: CHANGE_NEWQUESTION_ATTRIBUTE,
  payload: { value, key }
})

export const setErrorMessage = msg => ({
  type: SET_ERROR_MESSAGE,
  payload: { msg }
})