import { uuid } from "uuidv4"
import {
  RESET_NEW_QUESTION,
  ADD_QUESTION,
  REMOVE_QUESTION,
  UPDATE_QUESTION,
  SET_QUESTION_TEXT,
  SET_QUESTION_TYPE,
  MOVE_QUESTION,
  ADD_RADIO_OPTION
} from "./actions"

import Sample from "./sample"


export const initialState = {
  questions: Sample.map(s => Object.assign({}, s, {uuid: uuid()})),
  newQuestion: {
    text: "",
    type: null,
    options: []
  }
}


export default (state = initialState, action) => {
  let questions, newQuestion, index
  switch (action.type) {
    case RESET_NEW_QUESTION:
      return {
        ...state,
        newQuestion: {
          text: "",
          type: "date"
        }
      }
    case ADD_QUESTION:
      questions = [...state.questions]
      questions.push(action.payload.question)
      return {
        ...state,
        questions
      }
    case REMOVE_QUESTION:
      questions = [...state.questions].filter(q => q.uuid !== action.payload.uuid)
      return {
        ...state,
        questions
      }
    case SET_QUESTION_TEXT:
      newQuestion = Object.assign({}, state.newQuestion)
      newQuestion.text = action.payload.text
      return {
        ...state,
        newQuestion
      }
    case SET_QUESTION_TYPE:
      newQuestion = Object.assign({}, state.newQuestion)
      newQuestion.type = action.payload.type
      return {
        ...state,
        newQuestion
      }
    case UPDATE_QUESTION:
      questions = [...state.questions]
      index = questions.findIndex(question => question.uuid === action.payload.question.uuid)
      questions[index] = action.payload.question
      return {
        ...state,
        questions
      }
    case MOVE_QUESTION:
      // NOT WORKIN YET
      let arr = [...state.questions]
      index = arr.findIndex(question => question.uuid === action.payload.uuid)
      let newIndex = index + action.payload.direction
      arr.splice(newIndex, 0, arr.splice(index, 1)[0])
      questions = arr.map(question => Object.assign({}, JSON.parse(JSON.stringify(question))))
      return {
        ...state,
        questions
      }
    case ADD_RADIO_OPTION:
      newQuestion = Object.assign({}, state.newQuestion)
      newQuestion.options.push(action.payload.option)
      return {
        ...state,
        newQuestion
      }
    default:
      return state
  }
}