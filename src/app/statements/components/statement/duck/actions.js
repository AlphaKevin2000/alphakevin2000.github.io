export const ADD_STATEMENT = "ADD_STATEMENT"
export const ADD_CONDITION_UUID = "ADD_CONDITION_UUID"
export const UPDATE_NEWCONDITION_NAME = "UPDATE_NEWCONDITION_NAME"
export const TOGGLE_MODAL_STATEMENT = "TOGGLE_MODAL_STATEMENT"
export const UPDATE_STATEMENT_TRUETEXT = "UPDATE_STATEMENT_TRUETEXT"
export const UPDATE_STATEMENT_FALSETEXT = "UPDATE_STATEMENT_FALSETEXT"

export const addStatement = statement => ({
  type: ADD_STATEMENT,
  payload: { statement }
})

export const addConditionUUID = (conditionUUID, statementUUID) => ({
  type: ADD_CONDITION_UUID,
  payload: { conditionUUID, statementUUID }
})

export const updateNewConditionName = (name, statementUUID) => ({
  type: UPDATE_NEWCONDITION_NAME,
  payload: { name, statementUUID }
})

export const toggleModal = (showModal, statementUUID) => ({
  type: TOGGLE_MODAL_STATEMENT,
  payload: { showModal, statementUUID }
})

export const updateStatementTrueText = (value, statementUUID) => ({
  type: UPDATE_STATEMENT_TRUETEXT,
  payload: { value, statementUUID }
})

export const updateStatementFalseText = (value, statementUUID) => ({
  type: UPDATE_STATEMENT_FALSETEXT,
  payload: { value, statementUUID }
})