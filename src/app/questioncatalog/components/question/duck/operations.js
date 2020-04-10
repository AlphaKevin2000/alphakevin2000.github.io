import {
  removeQuestion,
  moveQuestion,
  changeQuestionAttribute
} from "./actions"

// TODO: order this!

export const handleRemoveQuestion = uuid => {
  return dispatch => {
    dispatch(removeQuestion(uuid))
  }
}

export const handleMoveQuestion = (uuid, direction) => {
  return dispatch => {
    dispatch(moveQuestion(uuid, direction))
  }
}

export const handleToggleNextQuestionMap = (checked, uuid) => {
  return (dispatch, getState) => {
    if (checked) {
      const state = getState()
      const targetQuestion = state.questioncatalog.questions.find(q => q.uuid === uuid)
      const nextQuestionMap = targetQuestion.options.map(opt => "")
      dispatch(changeQuestionAttribute(nextQuestionMap, "nextQuestionMap", uuid))
    }
    else {
      dispatch(changeQuestionAttribute(undefined, "nextQuestionMap", uuid))
    }
  }
}

export const handleToggleScoreMap = (checked, uuid) => {
  return (dispatch, getState) => {
    if (checked) {
      const state = getState()
      const targetQuestion = state.questioncatalog.questions.find(q => q.uuid === uuid)
      const options = targetQuestion.options.map(opt => 0)

      dispatch(changeQuestionAttribute(options, "scoreMap", uuid))
    }
    else {
      dispatch(changeQuestionAttribute(undefined, "scoreMap", uuid))
    }
  }
}

export const handleChangeQuestionID = (value, uuid) => {
  return dispatch => {
    dispatch(changeQuestionAttribute(value, "id", uuid))
  }
}

export const handleChangeQuestionText = (value, uuid) => {
  return dispatch => {
    dispatch(changeQuestionAttribute(value, "text", uuid))
  }
}

export const handleChangeQuestionCategory = (value, uuid) => {
  return dispatch => {
    dispatch(changeQuestionAttribute(value, "category", uuid))
  }
}

export const handleChangeQuestionType = (value, uuid) => {
  return dispatch => {
    dispatch(changeQuestionAttribute(value, "inputType", uuid))
    dispatch(changeQuestionAttribute(undefined, "scoreMap", uuid))
    dispatch(changeQuestionAttribute(undefined, "nextQuestionMap", uuid))
    if(value === "radio") {
      dispatch(changeQuestionAttribute([], "options", uuid))
    } else {
      dispatch(changeQuestionAttribute(undefined, "options", uuid))
    }
  }
}

export const questionOperations = {
  handleRemoveQuestion,
  handleMoveQuestion,
  handleToggleNextQuestionMap,
  handleToggleScoreMap,
  handleChangeQuestionID,
  handleChangeQuestionText,
  handleChangeQuestionCategory,
  handleChangeQuestionType
}