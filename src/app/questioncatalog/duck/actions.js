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

export const TOGGLE_NEWQUESTION_MODAL = "TOGGLE_NEWQUESTION_MODAL"
export const CHANGE_NEWQUESTION_ATTRIBUTE = "CHANGE_NEWQUESTION_ATTRIBUTE"

export const newQuestionActionTypes = {
  TOGGLE_NEWQUESTION_MODAL,
  CHANGE_NEWQUESTION_ATTRIBUTE,
  ADD_QUESTION,
}

export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE"
export const SET_INFO_MESSAGE = "SET_INFO_MESSAGE"
export const SET_SUCCESS_MESSAGE = "SET_SUCCESS_MESSAGE"

export const messageActionTypes = {
  SET_ERROR_MESSAGE,
  SET_INFO_MESSAGE,
  SET_SUCCESS_MESSAGE
}

export const UPDATE_RECOM_THRESHOLD = "UPDATE_RECOM_THRESHOLD"
export const UPDATE_RECOM_TEXT = "UPDATE_RECOM_TEXT"

export const scoreThresholdActionTypes = {
  UPDATE_RECOM_THRESHOLD,
  UPDATE_RECOM_TEXT
}

export const UPDATE_NEW_RADIO_OPTION = "UPDATE_NEW_RADIO_OPTION" // TODO: move this to some xxxActionTypes


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

export const updateNewRadioOption = option => ({
  type: UPDATE_NEW_RADIO_OPTION,
  payload: { option }
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

export const updateRecomText = (text, category, key) => ({
  type: UPDATE_RECOM_TEXT,
  payload: {text, category, key}
})

export const updateRecomThreshold = (value, category) => ({
  type: UPDATE_RECOM_THRESHOLD,
  payload: {value, category }
})