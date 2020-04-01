//import fetch from "cross-fetch"
import { uuid as uuidV4 } from "uuidv4"
import {
  resetNewQuestion,
  addQuestion,
  removeQuestion,
  updateQuestion,
  setQuestionText,
  setQuestionType,
  moveQuestion,
  addRadioOption
} from "./actions"


export const handleAddQuestion = question => {
  return dispatch => {
    question.uuid = uuidV4()
    dispatch(addQuestion(question))
    dispatch(resetNewQuestion({text: "", type: null}))
  }
}

export const handleRemoveQuestion = question => {
  return dispatch => {
    dispatch(removeQuestion(question))
  }
}

export const handleUpateQuestion = question => {
  return dispatch => {
    dispatch(updateQuestion)
  }
}

export const handleQuestionTextChange = text => {
  return dispatch => {
    dispatch(setQuestionText(text))
  }
}

export const handleQuestionTypeChange = type => {
  return dispatch => {
    dispatch(setQuestionType(type))
  }
}

export const handleMoveQuestion = (uuid, direction) => {
  return dispatch => {
    dispatch(moveQuestion(uuid, direction))
  }
}

export const handleAddRadioOption = option => {
  return dispatch => {
    dispatch(addRadioOption(option))
  }
}