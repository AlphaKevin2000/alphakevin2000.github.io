//import { combineReducers } from "redux"
import {
  ADD_STATEMENT,
  ADD_CONDITION_UUID,
  UPDATE_NEWCONDITION_NAME,
  TOGGLE_MODAL_STATEMENT,
  UPDATE_STATEMENT_TRUETEXT,
  UPDATE_STATEMENT_FALSETEXT
} from "./actions"

export const initialStateStatements = {
  statements: [],
  newConditionName: ""
}

export const statementsReducer = (state = initialStateStatements, action) => {
  let statements, sIndex, conditionUUIDs
  switch (action.type) {
    case ADD_STATEMENT:
      const statement = [Object.assign({}, action.payload.statement)]
      statements = [...state.statements, ...statement]
      return {
        statements: [...statements],
      }
    case ADD_CONDITION_UUID:
      statements = [...state.statements]
      sIndex = statements.findIndex(s => s.uuid === action.payload.statementUUID)
      conditionUUIDs = [...statements[sIndex].conditions]
      conditionUUIDs.push(action.payload.conditionUUID)
      statements[sIndex].conditions = conditionUUIDs
      statements[sIndex].showModal = false
      return {
        newConditionName: "",
        statements: [...statements]
      }
    case UPDATE_NEWCONDITION_NAME:
      return {
        ...state,
        newConditionName: action.payload.name
      }
    case TOGGLE_MODAL_STATEMENT:
      statements = [...state.statements]
      sIndex = statements.findIndex(s => s.uuid === action.payload.statementUUID)
      statements[sIndex].showModal = action.payload.showModal
      return {
        ...state,
        statements: [...statements]
      }
    case UPDATE_STATEMENT_TRUETEXT:
      statements = [...state.statements]
      sIndex = statements.findIndex(s => s.uuid === action.payload.statementUUID)
      statements[sIndex].trueText = action.payload.value
      return {
        ...state,
        statements: [...statements]
      }
    case UPDATE_STATEMENT_FALSETEXT:
      statements = [...state.statements]
      sIndex = statements.findIndex(s => s.uuid === action.payload.statementUUID)
      statements[sIndex].falseText = action.payload.value
      return {
        ...state,
        statements: [...statements]
      }
    default:
      return state
  }
}

export default statementsReducer
