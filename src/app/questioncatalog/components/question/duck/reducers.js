import { uuid } from "uuidv4"
//import { combineReducers } from "redux"
import reduceReducers  from "reduce-reducers"

import {
  questionActionTypes,
} from "./actions"

import Sample from "./sample"
//import SampleSmall from "./sample_small"

// TODO: Move this
export const findTargetQuestionIndex = (questions, uuid) => questions.findIndex(q => q.uuid === uuid)
export const findTargetQuestion = (questions, uuid) => questions.find(q => q.uuid === uuid)


export const initialStateQuestions = Sample.map(s => Object.assign({}, s, { uuid: uuid() }))

export const questionsReducer = (state = initialStateQuestions, action) => {
  let questions, index, targetQuestionIndex, targetQuestion
  const {
    REMOVE_QUESTION,
    ADD_QUESTION,
    MOVE_QUESTION,
    CHANGE_QUESTION_ATTRIBUTE
  } = questionActionTypes

  switch (action.type) {
    case REMOVE_QUESTION:
      questions = [...state].filter(q => q.uuid !== action.payload.uuid)
      return questions

    case ADD_QUESTION:
      questions = [...state]

      if (questions.some(q => q.uuid === action.payload.question.uuid)) { // already exists
        return state
      }

      questions.push(action.payload.question)
      return questions


    case MOVE_QUESTION:
      // working now and total overkill. refactor this
      let arr = [...state]
      index = arr.findIndex(question => question.uuid === action.payload.uuid)
      let newIndex = index + action.payload.direction

      if (newIndex < 0 || newIndex >= arr.length) {
        return state
      }
      arr.splice(newIndex, 0, arr.splice(index, 1)[0])
      questions = arr.map(question => Object.assign({}, JSON.parse(JSON.stringify(question))))

      return questions


    case CHANGE_QUESTION_ATTRIBUTE:
      questions = [...state]
      targetQuestionIndex = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = questions[targetQuestionIndex]
      targetQuestion[action.payload.attribute] = action.payload.value
      questions[targetQuestionIndex] = Object.assign({}, targetQuestion)

      return questions


    default:
      return state
  }
}

export default reduceReducers(questionsReducer)