import { uuid } from "uuidv4"
import {
  REMOVE_QUESTION,
  UPDATE_QUESTION,
  MOVE_QUESTION,
  UPDATE_RADIO_OPTION,
  REMOVE_RADIO_OPTION,
  ADD_NEW_RADIO_OPTION,
  UPDATE_NEW_RADIO_OPTION,
  REMOVE_NEXTQUESTIONMAP,
  ADD_NEXTQUESTIONMAP,
  UPDATE_NEXTQUESTIONMAP_OPTION,
  ADD_NEXTQUESTIONMAP_OPTION
} from "./actions"


//import Sample from "./sample"
import SampleSmall from "./sample_small"


export const initialState = {
  questions: SampleSmall.map(s => Object.assign({}, s, { uuid: uuid() })),
  newQuestion: {
    text: "",
    type: null,
    options: []
  },
  editQuestion: {
    id: undefined,
    category: undefined,
    text: undefined,
    inputType: undefined,
    uuid: undefined,
    options: undefined,
    nextQuestionMap: undefined,
  },
  newRadioOption: "",
  //newNextQuestionMap: undefined
}

export const findTargetQuestionIndex = (questions, uuid) => questions.findIndex(q => q.uuid === uuid)
export const findTargetQuestion = (questions, uuid) => questions.find(q => q.uuid === uuid)

/* TODO: make everything use editQuestion, so one can call UPDATE_QUESTION after things are set */

export default (state = initialState, action) => {
  let questions, editQuestion, index, targetQuestionIndex, targetQuestion
  switch (action.type) {
    case REMOVE_QUESTION:
      questions = [...state.questions].filter(q => q.uuid !== action.payload.uuid)

      return {
        ...state,
        questions
      }

    case UPDATE_QUESTION:
      questions = [...state.questions]
      targetQuestionIndex  = findTargetQuestionIndex(questions, action.payload.question.uuid)
      questions[targetQuestionIndex] = state.editQuestion

      return {
        ...state,
        questions
      }

    case MOVE_QUESTION:
      // working now and total overkill. refactor this
      let arr = [...state.questions]
      index = arr.findIndex(question => question.uuid === action.payload.uuid)
      let newIndex = index + action.payload.direction
      arr.splice(newIndex, 0, arr.splice(index, 1)[0])
      questions = arr.map(question => Object.assign({}, JSON.parse(JSON.stringify(question))))

      return {
        ...state,
        questions
      }

    case UPDATE_RADIO_OPTION:
      questions = [...state.questions]
      targetQuestionIndex = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = questions[targetQuestionIndex]
      editQuestion = Object.assign({}, state.editQuestion, targetQuestion)
      editQuestion.options[action.payload.index] = action.payload.value

      return {
        ...state,
        editQuestion
      }

    case ADD_NEW_RADIO_OPTION:
      questions = [...state.questions]
      targetQuestionIndex  = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = findTargetQuestion(questions, action.payload.uuid)
      editQuestion = Object.assign({}, state.editQuestion, targetQuestion)
      editQuestion.options.push(action.payload.option)
      
      // TODO: add action to reset newRadioOption?
      return {
        ...state,
        editQuestion,
        newRadioOption: ""
      }

    case REMOVE_RADIO_OPTION:
      questions = [...state.questions]
      targetQuestionIndex  = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = findTargetQuestion(questions, action.payload.uuid)
      editQuestion = Object.assign({}, state.editQuestion, targetQuestion)
      editQuestion.options = editQuestion.options.filter((q, i) => i !== action.payload.index)

      editQuestion.nextQuestionMap = editQuestion.nextQuestionMap !== undefined
        ? targetQuestion.nextQuestionMap.filter((n,i) => i !== action.payload.index)
        : undefined

      return {
        ...state,
        editQuestion
      }

    case UPDATE_NEW_RADIO_OPTION:
      console.log("LLOKKK", action.payload)
      return {
        ...state,
        newRadioOption: action.payload.option
      }

    case REMOVE_NEXTQUESTIONMAP:
      questions = [...state.questions]
      targetQuestionIndex = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = questions[targetQuestionIndex]
      editQuestion = Object.assign({}, state.editQuestion, targetQuestion)
      editQuestion.nextQuestionMap = undefined

      return {
        ...state,
        editQuestion
      }

    case ADD_NEXTQUESTIONMAP:
      questions = [...state.questions]
      targetQuestionIndex = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = questions[targetQuestionIndex]
      editQuestion = Object.assign({}, state.editQuestion, targetQuestion)
      editQuestion.nextQuestionMap = editQuestion.options.map(o => "")
      
      return {
        ...state,
        editQuestion
      }

    case UPDATE_NEXTQUESTIONMAP_OPTION:
      questions = [...state.questions]
      targetQuestionIndex = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = questions[targetQuestionIndex]
      editQuestion = Object.assign({}, state.editQuestion, targetQuestion)
      editQuestion.nextQuestionMap[action.payload.index] = action.payload.value

      return {
        ...state,
        editQuestion
      }

    case ADD_NEXTQUESTIONMAP_OPTION:
      questions = [...state.questions]
      targetQuestionIndex  = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = findTargetQuestion(questions, action.payload.uuid)
      editQuestion = Object.assign({}, state.editQuestion, targetQuestion)
      /* editQuestion.nextQuestionMap =  editQuestion.nextQuestionMap === undefined
        ? []
        : editQuestion.nextQuestionMap */
      editQuestion.nextQuestionMap.push("")

      return {
        ...state,
        editQuestion
      }

    default:
      return state
  }
}