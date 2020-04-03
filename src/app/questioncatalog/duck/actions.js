export const REMOVE_QUESTION = "REMOVE_QUESTION"
export const UPDATE_QUESTION = "UPDATE_QUESTION"
export const MOVE_QUESTION = "MOVE_QUESTION"
export const UPDATE_QUESTION_TEXT = "UPDATE_QUESTION_TEXT"
export const UPDATE_RADIO_OPTION = "UPDATE_RADIO_OPTION"
export const ADD_RADIO_OPTION = "ADD_RADIO_OPTION"
export const ADD_NEW_RADIO_OPTION = "ADD_NEW_RADIO_OPTION"
export const UPDATE_NEW_RADIO_OPTION = "UPDATE_NEW_RADIO_OPTION"
export const REMOVE_RADIO_OPTION = "REMOVE_RADIO_OPTION"
export const REMOVE_NEXTQUESTIONMAP = "REMOVE_NEXTQUESTIONMAP"
export const ADD_NEXTQUESTIONMAP = "ADD_NEXTQUESTIONMAP"
export const UPDATE_NEXTQUESTIONMAP_OPTION = "UPDATE_NEXTQUESTIONMAP_OPTION"
export const ADD_NEXTQUESTIONMAP_OPTION = "ADD_NEXTQUESTIONMAP_OPTION"
export const REMOVE_NEXTQUESTIONMAP_OPTION = "REMOVE_NEXTQUESTIONMAP_OPTION"
export const SET_NEW_QUESTION_TEXT = "SET_NEW_QUESTION_TEXT"
export const SET_NEW_QUESTION_TYPE = "SET_NEW_QUESTION_TYPE"
export const ADD_NEW_QUESTION = "ADD_NEW_QUESTION"
export const RESET_NEW_QUESTION = "RESET_NEW_QUESTION"


export const removeQuestion = uuid => ({
  type: REMOVE_QUESTION,
  payload: { uuid }
})

export const updateQuestion = question => ({
  type: UPDATE_QUESTION,
  payload: { question }
})

export const moveQuestion = (uuid, direction) => ({
  type: MOVE_QUESTION,
  payload: { uuid, direction }
})

export const updateQuestionText = (text) => ({
  type: UPDATE_QUESTION_TEXT,
  payload: { text }
})

export const updateRadioOption = (value, uuid, index) => ({
  type: UPDATE_RADIO_OPTION,
  payload: { value, uuid, index }
})

export const addRadioOption = option => ({
  type: ADD_RADIO_OPTION,
  payload: { option }
})

export const addNewRadioOption = (option, uuid) => ({
  type: ADD_NEW_RADIO_OPTION,
  payload: { option, uuid }
})

export const removeRadioOption = (uuid, index) => ({
  type: REMOVE_RADIO_OPTION,
  payload: { uuid, index }
})

export const updateNewRadioOption = option => ({
  type: UPDATE_NEW_RADIO_OPTION,
  payload: { option }
})

export const removeNextQuestionMap = uuid => ({
  type: REMOVE_NEXTQUESTIONMAP,
  payload: { uuid }
})

export const addNextQuestionMap = uuid => ({
  type: ADD_NEXTQUESTIONMAP,
  payload: { uuid }
})

export const updateNextQuestionMapOption = (value, uuid, index) => ({
  type: UPDATE_NEXTQUESTIONMAP_OPTION,
  payload: { value, uuid, index }
})

export const addNextQuestionMapOption = (uuid) => ({
  type: ADD_NEXTQUESTIONMAP_OPTION,
  payload: { uuid }
})

export const removeNextQuestionMapOption = (uuid, index) => ({
  type: REMOVE_NEXTQUESTIONMAP_OPTION,
  payload: { uuid, index }
})

export const setNewQuestionText = text => ({
  type: SET_NEW_QUESTION_TEXT,
  payload: { text }
})

export const setNewQuestionType = type => ({
  type: SET_NEW_QUESTION_TYPE,
  payload: { type }
})

export const addNewQuestion = question => ({
  type: ADD_NEW_QUESTION,
  payload: { question }
})

export const resetNewQuestion = question => ({
  type: RESET_NEW_QUESTION,
  payload: { question }
})