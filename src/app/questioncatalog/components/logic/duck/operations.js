import {
  updateRecomText,
  updateRecomThreshold
} from "./actions"

export const handleUpdateRecomThreshold = (value, category) => {
  return dispatch => {
    dispatch(updateRecomThreshold(value, category))
  }
}

export const handleUpdateRecomText = (value, category, key) => {
  return (dispatch, getState) => {
    dispatch(updateRecomText(value, category, key))
  }
}

export const logicOperations = {
  handleUpdateRecomThreshold,
  handleUpdateRecomText
}