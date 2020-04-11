import {
  addQuestion,
  toggleNewQuestionModal,
  changeNewQuestionAttribute,
  setErrorMessage,
} from "./actions"
import { uuid } from "uuidv4"


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

export const handleAddQuestion = (id) => {
  return (dispatch, getState) => {
    const state = getState()
    let { questions, newQuestion } = state.questioncatalog
    const isUniqueQuestion = questions.find(q => q.id === id) === undefined // there is no such question
    if (isUniqueQuestion) {
      const newQuestionUUID = newQuestion.uuid
      newQuestion = Object.assign({}, newQuestion, { uuid: newQuestionUUID })
      dispatch(addQuestion(newQuestion))
      dispatch(toggleNewQuestionModal(false))
      dispatch(changeNewQuestionAttribute(uuid(), "uuid"))
    } else {
      // display error so user can change question id
      dispatch(setErrorMessage(`Question with name ${id} already exists!`))
    }
  }
}

export const newQuestionOperations = {
  handleToggleNewQuestionModal,
  handleChangeNewQuestion,
  handleAddQuestion,
}