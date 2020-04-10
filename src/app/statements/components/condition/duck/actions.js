export const CHANGE_OPERAND = "CHANGE_OPERAND"
export const CHANGE_SELECTED = "CHANGED_SELECTED"
export const CHANGE_VALUE = "CHANGE_VALUE"
export const CHANGE_COMBINATION = "CHANGE_COMBINATION"
export const ADD_CONDITION = "ADD_CONDITION"

export const changeOperand = (operand, cIndex, sIndex) => ({
  type: CHANGE_OPERAND,
  payload: { operand, cIndex, sIndex }
})

export const changeSelected = (selected, cIndex, sIndex) => ({
  type: CHANGE_SELECTED,
  payload: { selected, cIndex, sIndex }
})

export const changeValue = (value, cIndex, sIndex) => ({
  type: CHANGE_VALUE,
  payload: { value, cIndex, sIndex }
})

export const changeCombination = (combination, cIndex, sIndex) => ({
  type: CHANGE_COMBINATION,
  payload: { combination, cIndex, sIndex }
})

export const addCondition = (condition) => ({
  type: ADD_CONDITION,
  payload: { condition }
})