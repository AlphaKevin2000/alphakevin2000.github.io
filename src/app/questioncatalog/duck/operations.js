import { uuid } from "uuidv4"
import {
  removeQuestion,
  updateQuestion,
  moveQuestion,
  renameQuestion,
  changeQuestionText,
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
  toggleNewQuestionModal,
  changeNewQuestion,
  addQuestion,
  setErrorMessage
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

export const handleChangeQuestionText = (value, uuid) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.find(q => q.uuid === uuid)
    dispatch(changeQuestionText(value, uuid))
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

export const handleToggleNewQuestionModal = value => {
  return dispatch => {
    dispatch(toggleNewQuestionModal(value))
  }
}

export const handleChangeNewQuestion = (value, key) => {
  return (dispatch, getState) => {
    dispatch(changeNewQuestion(value, key))
    if(key === "inputType") {
      // need so change options
      value === "date"
       ? dispatch(changeNewQuestion(undefined, "options"))
       : dispatch(changeNewQuestion([], "options"))
    }
  }
}

export const handleAddQuestion = () => {
  return (dispatch, getState) => {
    const state = getState()
    const { editQuestion, questions } = state.questioncatalog
    const isUniqueQuestion = questions.find(q => q.id === editQuestion.id) === undefined // there is no such question
    if (isUniqueQuestion) {
      const newQuestionUUID = uuid()
      const newQuestion = Object.assign({}, editQuestion, {uuid: newQuestionUUID})
      dispatch(addQuestion(newQuestion))
    } else {
      // display error so user can change question id
      dispatch(setErrorMessage(`Question with name ${editQuestion.id} already exists!`))
    }
  }
}