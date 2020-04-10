import {
  changeOperand,
  changeSelected,
  changeValue,
  changeCombination
} from "./actions"


// TODO: DRY?

export const handleChangeOperand = (operand, condition, statement) => {
  return (dispatch, getState) => {
    const state = getState()
    const statements = state.statements.statements.statements
    const conditions = state.statements.conditions.conditions
    const sIndex = statements.findIndex(s => s === statement)
    const cIndex = conditions.findIndex(c => c === condition)
    dispatch(changeOperand(operand, cIndex, sIndex))
  }
}

export const handleChangeSelected = (value, condition, statement) => {
  return (dispatch, getState) => {
    //console.log(value, condition, statement)
    const state = getState()
    const statements = state.statements.statements.statements
    const conditions = state.statements.conditions.conditions
    const sIndex = statements.findIndex(s => s === statement)
    const cIndex = conditions.findIndex(c => c === condition)

    let selected
    if(condition.selected.includes(value)) {
      selected = condition.selected.filter(s => s !== value)
    } else {
      selected = [...condition.selected, value]
    }
    dispatch(changeSelected(selected, cIndex, sIndex))
  }
}

export const handleChangeValue = (value, condition, statement) => {
  return (dispatch, getState) => {
    const state = getState()
    const statements = state.statements.statements.statements
    const conditions = state.statements.conditions.conditions
    const sIndex = statements.findIndex(s => s === statement)
    const cIndex = conditions.findIndex(c => c === condition)
    dispatch(changeValue(value, cIndex, sIndex))
  }
}

export const handleChangeCombination = (combination, condition, statement) => {
  return (dispatch, getState) => {
    const state = getState()
    const statements = state.statements.statements.statements
    const conditions = state.statements.conditions.conditions
    const sIndex = statements.findIndex(s => s === statement)
    const cIndex = conditions.findIndex(c => c === condition)
    dispatch(changeCombination(combination, cIndex, sIndex))
  }
}