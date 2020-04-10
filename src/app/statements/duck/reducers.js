//import reduceReducers from "reduce-reducers"
import { combineReducers } from "redux"
import {
  ADD_STATEMENT_UUID,
  UPDATE_NEWSTATEMENT_NAME,
  TOGGLE_MODAL,
  CHANGE_ANSWER
} from "./actions"

import statementsReducer from "../components/statement/duck"
import conditionsReducer from "../components/condition/duck"

export const initialStateCatalog = {
  operands: ["==", "<=", ">=", "!="],
  combinations: ["&&", "||"],
  catalog: [],
  newStatementName: "",
  showModal: false,
  answers: []
}

export const catalogReducer = (state = initialStateCatalog, action) => {
  let catalog, answers
  switch (action.type) {
    case ADD_STATEMENT_UUID:
      catalog = [...state.catalog]
      catalog.push(action.payload.uuid)
      return {
        ...state,
        newStatementName: "",
        showModal: false,
        catalog
      }
    case UPDATE_NEWSTATEMENT_NAME:
      return {
        ...state,
        newStatementName: action.payload.name
      }
    case TOGGLE_MODAL:
      return {
        ...state,
        showModal: action.payload.showModal
      }
    case CHANGE_ANSWER:
      answers = [...state.answers]
      answers[action.payload.index] = action.payload.answer
      return {
        ...state,
        answers: answers
      }
    default:
      return state
  }
}


//export default reduceReducers(shitReducer, statementsReducer, conditionsReducer)
export default combineReducers({
  catalog: catalogReducer,
  statements: statementsReducer,
  conditions: conditionsReducer
})