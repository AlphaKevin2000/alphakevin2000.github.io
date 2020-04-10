import {
  changeQuestionAttribute,
  updateNewRadioOption
} from "./actions"


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