import {
  removeQuestion,
  updateQuestion,
  moveQuestion,
  renameQuestion,
  changeQuestionCategory,
  changeQuestionType,
  updateRadioOption,
  removeRadioOption,
  updateNewRadioOption,
  addNewRadioOption,
  removeOptions,
  addOptions,
  removeNextQuestionMap,
  addNextQuestionMap,
  addNextQuestionMapOption,
  updateNextQuestionMapOption,
} from "./actions"

// TODO: order this!

export const handleRemoveQuestion = question => {
  return dispatch => {
    dispatch(removeQuestion(question))
  }
}

export const handleMoveQuestion = (uuid, direction) => {
  return dispatch => {
    dispatch(moveQuestion(uuid, direction))
  }
}

export const handleRenameQuestion = (value, uuid) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.find(q => q.uuid === uuid)
    dispatch(renameQuestion(value, uuid))
    dispatch(updateQuestion(targetQuestion))
  }
}

export const handleChangeQuestionCategory = (value, uuid) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.find(q => q.uuid === uuid)
    dispatch(changeQuestionCategory(value, uuid))
    dispatch(updateQuestion(targetQuestion))
  }
}

export const changeChangeQuestionType = (value, uuid) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.find(q => q.uuid === uuid)
    // time for sagas?
    dispatch(changeQuestionType(value, uuid))
    dispatch(updateQuestion(targetQuestion))
    if(value === "date") {
      dispatch(removeOptions(uuid))
      dispatch(updateQuestion(targetQuestion))
      dispatch(removeNextQuestionMap(uuid))
    }
    else {
      dispatch(addOptions(uuid))
    }
    // date ? options [], nextQuesitonMap [] : null
    dispatch(updateQuestion(targetQuestion))
    dispatch(removeNextQuestionMap(uuid))

    dispatch(updateQuestion(targetQuestion))
  }
}

export const handleUpdateRadioOption = (value, uuid, index) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.find(q => q.uuid === uuid)
    dispatch(updateRadioOption(value, uuid, index))
    dispatch(updateQuestion(targetQuestion))

  }
}

export const handleRemoveRadioOption = (uuid, index) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.find(q => q.uuid === uuid)
    dispatch(removeRadioOption(uuid, index))
    dispatch(updateQuestion(targetQuestion))
  }
}

export const handleUpdateNewRadioOption = option => {
  return dispatch => {
    dispatch(updateNewRadioOption(option))
  }
}

export const handleAddNewRadioOption = (option, uuid) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.find(q => q.uuid === uuid)
    dispatch(addNewRadioOption(option, uuid))
    if (targetQuestion.nextQuestionMap !== undefined) {
      dispatch(addNextQuestionMapOption(uuid))
    }
    
    dispatch(updateQuestion(targetQuestion))
  }
}

export const handleToggleNextQuestionMap = (event, uuid) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.find(q => q.uuid === uuid)
    if(event.target.checked) {
      dispatch(addNextQuestionMap(uuid))
    }
    else {
      dispatch(removeNextQuestionMap(uuid))
    }
    dispatch(updateQuestion(targetQuestion))
  }
}

export const handleUpdateNextQuestionMapOption = (value, uuid, index) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.find(q => q.uuid === uuid)
    dispatch(updateNextQuestionMapOption(value, uuid, index))
    dispatch(updateQuestion(targetQuestion))
  }
}