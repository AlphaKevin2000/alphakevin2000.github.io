import {
  removeQuestion,
  updateQuestion,
  moveQuestion,
  updateRadioOption,
  removeRadioOption,
  updateNewRadioOption,
  addNewRadioOption,
  removeNextQuestionMap,
  addNextQuestionMap,
  addNextQuestionMapOption,
  updateNextQuestionMapOption,
} from "./actions"

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
  console.log(event.target.checked, uuid)
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