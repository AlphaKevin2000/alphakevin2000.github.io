import {
  removeQuestion,
  moveQuestion,
  moveQuestionDnD,
  changeQuestionAttribute,
  toggleModal,
  updateNewRadioOption
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

export const handleMoveQuestionDnD = (dragIndex, dropIndex) => {
  return dispatch => {
    dispatch(moveQuestionDnD(dragIndex, dropIndex))
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

export const handleToggleModal = (show, questionUUID) => {
  return dispatch => {
    dispatch(toggleModal(show, questionUUID))
  }
}

export const handleUpdateNextQuestionMapOption = (value, uuid, index) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.find(q => q.uuid === uuid)
    const nextQuestionMap = targetQuestion.nextQuestionMap
    nextQuestionMap[index] = value
    dispatch(changeQuestionAttribute(nextQuestionMap, "nextQuestionMap", uuid))
  }
}

export const questionOperations = {
  handleRemoveQuestion,
  handleMoveQuestion,
  handleMoveQuestionDnD,
  handleToggleNextQuestionMap,
  handleToggleScoreMap,
  handleChangeQuestionID,
  handleChangeQuestionText,
  handleChangeQuestionCategory,
  handleChangeQuestionType,
  handleToggleModal
}


export const handleUpdateRadioOption = (value, uuid, index) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.find(q => q.uuid === uuid)
    const options = targetQuestion.options
    options[index] = value
    dispatch(changeQuestionAttribute(options, "options", uuid))
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
    if(targetQuestion.hasOwnProperty("nextQuestionMap") && targetQuestion.nextQuestionMap !== undefined) {
      const nextQuestionMap = targetQuestion.nextQuestionMap
      nextQuestionMap.push("")
      dispatch(changeQuestionAttribute(nextQuestionMap, "nextQuestionMap", uuid))
    }
    if(targetQuestion.hasOwnProperty("scoreMap") && targetQuestion.scoreMap !== undefined) {
      const scoreMap = targetQuestion.scoreMap
      scoreMap.push(0)
      dispatch(changeQuestionAttribute(scoreMap, "scoreMap", uuid))
    }
    const options = targetQuestion.options
    options.push(option)
    dispatch(changeQuestionAttribute(options, "options", uuid))
    dispatch(updateNewRadioOption(""))
    dispatch(changeQuestionAttribute(false, "showModal", uuid))
  }
}

export const handleRemoveRadioOption = (uuid, index) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.find(q => q.uuid === uuid)
    const options = targetQuestion.options.filter((opt,i) => i !== index)
    if(targetQuestion.hasOwnProperty("nextQuestionMap")) {
      const nextQuestionMap = targetQuestion.nextQuestionMap.filter((opt,i) => i !== index)
      dispatch(changeQuestionAttribute(nextQuestionMap, "nextQuestionMap", uuid))
    }
    if(targetQuestion.hasOwnProperty("scoreMap")) {
      const scoreMap = targetQuestion.scoreMap.filter((opt,i) => i !== index)
      dispatch(changeQuestionAttribute(scoreMap, "scoreMap", uuid))
    }
    dispatch(changeQuestionAttribute(options, "options", uuid))
    
  }
}

export const radioOptionOperations = {
  handleUpdateRadioOption,
  handleUpdateNewRadioOption,
  handleAddNewRadioOption,
  handleRemoveRadioOption
}