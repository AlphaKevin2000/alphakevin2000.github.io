import {
  addConditionUUID,
  updateNewConditionName,
  toggleModal,
  updateStatementFalseText,
  updateStatementTrueText
} from "./actions"
import {
  addCondition
} from "../../condition/duck/actions"


export const handleAddConditionUUID = (uuid, name, statementUUID) => {
  return dispatch => {
    dispatch(addConditionUUID(uuid, statementUUID))

    const condition = {
      name: name,
      selected: [],
      uuid: uuid
    }
    dispatch(addCondition(condition))
  }
}

export const handleUpdateNewConditionName = (name, statementUUID) => {
  return dispatch => {
    dispatch(updateNewConditionName(name, statementUUID))
  }
}

export const handleToggleModal = (show, statementUUID) => {
  return dispatch => {
    dispatch(toggleModal(show, statementUUID))
  }
}

export const handleUpdateStatementText = (value, statementUUID, key) => {
  return dispatch => {
    if(key === "trueText") {
      dispatch(updateStatementTrueText(value, statementUUID))
    }
    if(key === "falseText") {
      dispatch(updateStatementFalseText(value, statementUUID))
    }
  }
}
