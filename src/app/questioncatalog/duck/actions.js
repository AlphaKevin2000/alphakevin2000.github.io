export const UPDATE_QUESTION = "UPDATE_QUESTION"
export const REMOVE_QUESTION = "REMOVE_QUESTION"
export const MOVE_QUESTION = "MOVE_QUESTION"
export const RENAME_QUESTION = "RENAME_QUESTION"
export const CHANGE_QUESTION_CATEGORY = "CHANGE_QUESTION_CATEGORY"
export const UPDATE_RADIO_OPTION = "UPDATE_RADIO_OPTION"
export const REMOVE_RADIO_OPTION = "REMOVE_RADIO_OPTION"
export const ADD_NEW_RADIO_OPTION = "ADD_NEW_RADIO_OPTION"
export const UPDATE_NEW_RADIO_OPTION = "UPDATE_NEW_RADIO_OPTION"
export const REMOVE_NEXTQUESTIONMAP = "REMOVE_NEXTQUESTIONMAP"
export const ADD_NEXTQUESTIONMAP = "ADD_NEXTQUESTIONMAP"
export const UPDATE_NEXTQUESTIONMAP_OPTION = "UPDATE_NEXTQUESTIONMAP_OPTION"
export const ADD_NEXTQUESTIONMAP_OPTION = "ADD_NEXTQUESTIONMAP_OPTION"


export const updateQuestion = question => ({
  type: UPDATE_QUESTION,
  payload: { question }
})

export const removeQuestion = uuid => ({
  type: REMOVE_QUESTION,
  payload: { uuid }
})

export const renameQuestion = (value, uuid) => ({
  type: RENAME_QUESTION,
  payload: { value, uuid }
})

export const changeQuestionCategory = (value, uuid) => ({
  type: CHANGE_QUESTION_CATEGORY,
  payload: { value, uuid }
})

export const moveQuestion = (uuid, direction) => ({
  type: MOVE_QUESTION,
  payload: { uuid, direction }
})

export const updateRadioOption = (value, uuid, index) => ({
  type: UPDATE_RADIO_OPTION,
  payload: { value, uuid, index }
})

export const removeRadioOption = (uuid, index) => ({
  type: REMOVE_RADIO_OPTION,
  payload: { uuid, index }
})

export const addNewRadioOption = (option, uuid) => ({
  type: ADD_NEW_RADIO_OPTION,
  payload: { option, uuid }
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