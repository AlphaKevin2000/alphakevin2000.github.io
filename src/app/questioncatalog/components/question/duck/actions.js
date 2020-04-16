export const REMOVE_QUESTION = "REMOVE_QUESTION"
export const ADD_QUESTION = "ADD_QUESTION"
export const MOVE_QUESTION = "MOVE_QUESTION"
export const MOVE_QUESTION_DND = "MOVE_QUESTION_DND"
export const CHANGE_QUESTION_ATTRIBUTE = "CHANGE_QUESTION_ATTRIBUTE"
export const TOGGLE_QUESTION_OPTION_MODAL = "TOGGLE_QUESTION_OPTION_MODAL"
export const UPDATE_NEW_RADIO_OPTION = "UPDATE_NEW_RADIO_OPTION"

export const questionActionTypes = {
  REMOVE_QUESTION,
  MOVE_QUESTION,
  MOVE_QUESTION_DND,
  CHANGE_QUESTION_ATTRIBUTE,
  ADD_QUESTION,
  TOGGLE_QUESTION_OPTION_MODAL
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

export const moveQuestionDnD = (dragIndex, dropIndex) => ({
  type: MOVE_QUESTION_DND,
  payload: { dragIndex, dropIndex }
})

export const changeQuestionAttribute = (value, attribute, uuid) => ({
  type: CHANGE_QUESTION_ATTRIBUTE,
  payload: { value, attribute, uuid }
})

export const toggleModal = (showModal, uuid) => ({
  type: TOGGLE_QUESTION_OPTION_MODAL,
  payload: { showModal, uuid }
})

export const updateNewRadioOption = option => ({
  type: UPDATE_NEW_RADIO_OPTION,
  payload: { option }
})