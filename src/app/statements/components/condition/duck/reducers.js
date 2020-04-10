//import { combineReducers } from "redux"
import {
  CHANGE_OPERAND,
  CHANGE_SELECTED,
  CHANGE_VALUE,
  CHANGE_COMBINATION,
  ADD_CONDITION
} from "./actions"

export const initialStateConditions = {
  conditions: []
}

export const conditionsReducer = ( state = initialStateConditions, action) => {
  let conditions
  switch (action.type) {
    case CHANGE_OPERAND:
      conditions = [...state.conditions]
      conditions[action.payload.cIndex].operand = action.payload.operand
      return {
        conditions: conditions
      }
    case CHANGE_SELECTED:
      conditions = [...state.conditions]
      conditions[action.payload.cIndex].selected = action.payload.selected
      return {
        conditions: conditions
      }
    case CHANGE_VALUE:
      conditions = [...state.conditions]
      conditions[action.payload.cIndex].value = action.payload.value
      return {
        conditions: conditions
      }
    case CHANGE_COMBINATION:
      conditions = [...state.conditions]
      conditions[action.payload.cIndex].combination = action.payload.combination
      return {
        conditions: conditions
      }
    case ADD_CONDITION:
      const condition = [action.payload.condition]
      conditions = [...state.conditions, ...condition]
      return {
        ...state,
        conditions: conditions
      }
    default: 
      return state
  }
}

export default conditionsReducer