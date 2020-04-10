export const ADD_STATEMENT_UUID = "ADD_STATEMENT_UUID"
export const UPDATE_NEWSTATEMENT_NAME = "UPDATE_NEWSTATEMENT_NAME"
export const TOGGLE_MODAL = "TOGGLE_MODAL"
export const CHANGE_ANSWER = "CHANGE_ANSWER"

export const addStatementUUID = uuid => ({
  type: ADD_STATEMENT_UUID,
  payload: { uuid }
})

export const updateNewStatementName = name => ({
  type: UPDATE_NEWSTATEMENT_NAME,
  payload: { name }
})

export const toggleModal = showModal => ({
  type: TOGGLE_MODAL,
  payload: { showModal }
})

export const changeAnswer = (answer, index) => ({
  type: CHANGE_ANSWER,
  payload: { answer, index }
})
