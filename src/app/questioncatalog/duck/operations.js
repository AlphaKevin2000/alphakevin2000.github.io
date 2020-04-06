import { uuid } from "uuidv4"
import {
  removeQuestion,
  addQuestion,
  moveQuestion,
  changeQuestionAttribute,
  updateNewRadioOption,
  toggleNewQuestionModal,
  changeNewQuestionAttribute,
  setErrorMessage,
  updateRecomThreshold,
  updateRecomText
} from "./actions"

// TODO: order this!

export const handleRemoveQuestion = question => {
  return dispatch => {
    dispatch(removeQuestion(question))
  }
}

export const handleAddQuestion = () => {
  return (dispatch, getState) => {
    const state = getState()
    const { questions } = state.questioncatalog.questions
    let newQuestion = state.questioncatalog.newQuestion
    const isUniqueQuestion = questions.find(q => q.id === newQuestion.id) === undefined // there is no such question
    if (isUniqueQuestion) {
      const newQuestionUUID = uuid()
      newQuestion = Object.assign({}, newQuestion, { uuid: newQuestionUUID })
      dispatch(addQuestion(newQuestion))
      dispatch(toggleNewQuestionModal(false))
    } else {
      // display error so user can change question id
      dispatch(setErrorMessage(`Question with name ${newQuestion.id} already exists!`))
    }
  }
}

export const handleMoveQuestion = (uuid, direction) => {
  return dispatch => {
    dispatch(moveQuestion(uuid, direction))
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

export const changeChangeQuestionType = (value, uuid) => {
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

export const handleUpdateRadioOption = (value, uuid, index) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.questions.find(q => q.uuid === uuid)
    const options = targetQuestion.options
    options[index] = value
    dispatch(changeQuestionAttribute(options, "options", uuid))
  }
}

export const handleRemoveRadioOption = (uuid, index) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.questions.find(q => q.uuid === uuid)
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

export const handleAddNewRadioOption = (option, uuid) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.questions.find(q => q.uuid === uuid)
    if(targetQuestion.hasOwnProperty("nextQuestionMap")) {
      const nextQuestionMap = targetQuestion.nextQuestionMap
      nextQuestionMap.push("")
      dispatch(changeQuestionAttribute(nextQuestionMap, "nextQuestionMap", uuid))
    }
    if(targetQuestion.hasOwnProperty("scoreMap")) {
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

export const handleUpdateNewRadioOption = option => {
  return dispatch => {
    dispatch(updateNewRadioOption(option))
  }
}

export const handleToggleNextQuestionMap = (event, uuid) => {
  return (dispatch, getState) => {
    if (event.target.checked) {
      const state = getState()
      const targetQuestion = state.questioncatalog.questions.questions.find(q => q.uuid === uuid)
      const nextQuestionMap = targetQuestion.options.map(opt => 0)
      dispatch(changeQuestionAttribute(nextQuestionMap, "nextQuestionMap", uuid))
    }
    else {
      dispatch(changeQuestionAttribute(undefined, "nextQuestionMap", uuid))
    }
  }
}

export const handleToggleScoreMap = (event, uuid) => {
  return (dispatch, getState) => {
    if (event.target.checked) {
      const state = getState()
      const targetQuestion = state.questioncatalog.questions.questions.find(q => q.uuid === uuid)
      const options = targetQuestion.options.map(opt => 0)

      dispatch(changeQuestionAttribute(options, "scoreMap", uuid))
    }
    else {
      dispatch(changeQuestionAttribute(undefined, "scoreMap", uuid))
    }
  }
}

export const handleUpdateNextQuestionMapOption = (value, uuid, index) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.questions.find(q => q.uuid === uuid)
    const nextQuestionMap = targetQuestion.nextQuestionMap
    nextQuestionMap[index] = value
    dispatch(changeQuestionAttribute(nextQuestionMap, "nextQuestionMap", uuid))
  }
}

export const handleUpdateScoreMapOption = (value, uuid, index) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.questions.find(q => q.uuid === uuid)
    const scoreMap = targetQuestion.scoreMap
    scoreMap[index] = value
    dispatch(changeQuestionAttribute(scoreMap, "scoreMap", uuid))
  }
}

export const handleToggleNewQuestionModal = value => {
  return dispatch => {
    dispatch(toggleNewQuestionModal(value))
  }
}

export const handleChangeNewQuestion = (value, key) => {
  return dispatch => {
    dispatch(changeNewQuestionAttribute(value, key))
  }
}


export const handleUpdateRecomThreshold = (value, category) => {
  return (dispatch, getState) => {
    dispatch(updateRecomThreshold(value, category))
  }
}


export const handleUpdateRecomText = (value, category, key) => {
  return (dispatch, getState) => {
    dispatch(updateRecomText(value, category, key))
  }
}