export const RESET_NEW_QUESTION = "RESET_NEW_QUESTION"
export const ADD_QUESTION = "ADD_QUESTION"
export const REMOVE_QUESTION = "REMOVE_QUESTION"
export const UPDATE_QUESTION = "UPDATE_QUESTION"
export const SET_QUESTION_TEXT = "SET_QUESTION_TEXT"
export const SET_QUESTION_TYPE = "SET_QUESTION_TYPE"
export const MOVE_QUESTION = "MOVE_QUESTION"
export const ADD_RADIO_OPTION = "ADD_RADIO_OPTION"

export const resetNewQuestion = question => ({
  type: RESET_NEW_QUESTION,
  payload: { question }
})

export const addQuestion = question => ({
  type: ADD_QUESTION,
  payload: { question }
})

export const removeQuestion = uuid => ({
  type: REMOVE_QUESTION,
  payload: { uuid }
})

export const updateQuestion = question => ({
  type: UPDATE_QUESTION,
  payload: { question }
})

export const setQuestionText = text => ({
  type: SET_QUESTION_TEXT,
  payload: { text }
})

export const setQuestionType = type => ({
  type: SET_QUESTION_TYPE,
  payload: { type }
})

export const moveQuestion = (uuid, direction) => ({
  type: MOVE_QUESTION,
  payload: { uuid, direction }
})

export const addRadioOption = option => ({
  type: ADD_RADIO_OPTION,
  payload: { option }
})