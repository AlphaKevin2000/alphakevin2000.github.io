import { uuid } from "uuidv4"
import {


  REMOVE_QUESTION,
  UPDATE_QUESTION,
  MOVE_QUESTION,
  RENAME_QUESTION,
  CHANGE_QUESTION_TEXT,
  CHANGE_QUESTION_CATEGORY,
  CHANGE_QUESTION_TYPE,
  UPDATE_RADIO_OPTION,
  REMOVE_RADIO_OPTION,
  ADD_NEW_RADIO_OPTION,
  UPDATE_NEW_RADIO_OPTION,
  REMOVE_OPTIONS,
  ADD_OPTIONS,
  REMOVE_NEXTQUESTIONMAP,
  ADD_NEXTQUESTIONMAP,
  UPDATE_NEXTQUESTIONMAP_OPTION,
  ADD_NEXTQUESTIONMAP_OPTION,

  REMOVE_SCOREMAP,
  ADD_SCOREMAP,
  UPDATE_SCORENMAP_OPTION,
  ADD_SCOREMAP_OPTION,

  TOGGLE_NEWQUESTION_MODAL,
  CHANGE_NEW_QUESTION,
  ADD_QUESTION,
  SET_ERROR_MESSAGE,

  UPDATE_RECOM_THRESHOLD,
  UPDATE_RECOM_TEXT

} from "./actions"


import Sample from "./sample"
import SampleSmall from "./sample_small"




export const initialState = {
  questions: Sample.map(s => Object.assign({}, s, { uuid: uuid() })),
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
    scoreMap: undefined
  },
  newRadioOption: "",
  showNewQuestionModal: false,
  errorMessage: "",
  categoryMap: {
    contact: "danger",
    personalInfo: "success",
    symptoms: "warning",
    respiratorySymptoms: "primary",
    illnesses: "dark",
    medication: "secondary"
  },
  inputTypes: ["radio", "date"],
  categories: ["contact", "personalInfo", "symptoms", "respiratorySymptoms", "illnesses", "medication"],
  scoreThresholdMap: {
    contact: {
      threshold: 0,
      recoms: {
        "isDanger": "lorem",
        "isSafe": "ipsum"
      }
    },
    personalInfo: {
      threshold: 0,
      recoms: {
        isDanger: "lorem",
        isSafe: "ipsum"
      }
    },
    symptoms: {
      threshold: 0,
      recoms: {
        isDanger: "lorem",
        isSafe: "ipsum"
      }
    },
    respiratorySymptoms: {
      threshold: 0,
      recoms: {
        isDanger: "lorem",
        isSafe: "ipsum"
      }
    },
    illnesses: {
      threshold: 0,
      recoms: {
        isDanger: "lorem",
        isSafe: "ipsum"
      }
    },
    medication: {
      threshold: 0,
      recoms: {
        isDanger: "lorem",
        isSafe: "ipsum"
      }
    }
  }
  //newNextQuestionMap: undefined
}

export const findTargetQuestionIndex = (questions, uuid) => questions.findIndex(q => q.uuid === uuid)
export const findTargetQuestion = (questions, uuid) => questions.find(q => q.uuid === uuid)

/* 
  TODO: make everything use editQuestion, so one can call UPDATE_QUESTION after things are set
  TODO: DRY?
  TODO: split reducer? this has become an abmomination
*/

export default (state = initialState, action) => {
  let questions, editQuestion, index, targetQuestionIndex, targetQuestion, scoreThresholdMap
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

    case RENAME_QUESTION:

      questions = [...state.questions]
      targetQuestionIndex = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = questions[targetQuestionIndex]
      editQuestion = Object.assign({}, state.editQuestion, targetQuestion)
      editQuestion.id = action.payload.value
      return {
        ...state,
        editQuestion
      }

    case CHANGE_QUESTION_TEXT:
      questions = [...state.questions]
      targetQuestionIndex = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = questions[targetQuestionIndex]
      editQuestion = Object.assign({}, state.editQuestion, targetQuestion)
      editQuestion.text = action.payload.value
      return {
        ...state,
        editQuestion
      }

    case CHANGE_QUESTION_CATEGORY:
      questions = [...state.questions]
      targetQuestionIndex = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = questions[targetQuestionIndex]
      editQuestion = Object.assign({}, state.editQuestion, targetQuestion)
      editQuestion.category = action.payload.value
      return {
        ...state,
        editQuestion
      }

    case CHANGE_QUESTION_TYPE: {
      questions = [...state.questions]
      targetQuestionIndex = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = questions[targetQuestionIndex]
      editQuestion = Object.assign({}, state.editQuestion, targetQuestion)
      editQuestion.inputType = action.payload.value
      return {
        ...state,
        editQuestion
      }
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

      // TODO: MOVE THIS!
      editQuestion.nextQuestionMap = editQuestion.nextQuestionMap !== undefined
        ? targetQuestion.nextQuestionMap.filter((n,i) => i !== action.payload.index)
        : undefined

      editQuestion.scoreMap = editQuestion.scoreMap !== undefined
        ? targetQuestion.scoreMap.filter((n,i) => i !== action.payload.index)
        : undefined

      return {
        ...state,
        editQuestion
      }

    case UPDATE_NEW_RADIO_OPTION:
      return {
        ...state,
        newRadioOption: action.payload.option
      }

    case REMOVE_OPTIONS:
      questions = [...state.questions]
      targetQuestionIndex  = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = findTargetQuestion(questions, action.payload.uuid)
      editQuestion = Object.assign({}, state.editQuestion, targetQuestion)
      editQuestion.options = undefined
      return {
        ...state,
        editQuestion
      }

    case ADD_OPTIONS:
      questions = [...state.questions]
      targetQuestionIndex  = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = findTargetQuestion(questions, action.payload.uuid)
      editQuestion = Object.assign({}, state.editQuestion, targetQuestion)
      editQuestion.options = []
      return {
        ...state,
        editQuestion
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

    case REMOVE_SCOREMAP:
      questions = [...state.questions]
      targetQuestionIndex = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = questions[targetQuestionIndex]
      editQuestion = Object.assign({}, state.editQuestion, targetQuestion)
      editQuestion.scoreMap = undefined

      return {
        ...state,
        editQuestion
      }
    case ADD_SCOREMAP:
      questions = [...state.questions]
      targetQuestionIndex = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = questions[targetQuestionIndex]
      editQuestion = Object.assign({}, state.editQuestion, targetQuestion)
      editQuestion.scoreMap = editQuestion.options.map(o => "")
      
      return {
        ...state,
        editQuestion
      }
    case UPDATE_SCORENMAP_OPTION:
      questions = [...state.questions]
      targetQuestionIndex = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = questions[targetQuestionIndex]
      editQuestion = Object.assign({}, state.editQuestion, targetQuestion)
      editQuestion.scoreMap[action.payload.index] = action.payload.value

      return {
        ...state,
        editQuestion
      }

    case ADD_SCOREMAP_OPTION:
      questions = [...state.questions]
      targetQuestionIndex  = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = findTargetQuestion(questions, action.payload.uuid)
      editQuestion = Object.assign({}, state.editQuestion, targetQuestion)
      /* editQuestion.nextQuestionMap =  editQuestion.nextQuestionMap === undefined
        ? []
        : editQuestion.nextQuestionMap */
      editQuestion.scoreMap.push("")

      return {
        ...state,
        editQuestion
      }

    case TOGGLE_NEWQUESTION_MODAL:
      return {
        ...state,
        showNewQuestionModal: action.payload.value
      }

    case CHANGE_NEW_QUESTION:
      editQuestion = Object.assign({}, state.editQuestion, {[action.payload.key]: action.payload.value})
      return {
        ...state,
        editQuestion
      }

    case ADD_QUESTION:
      questions = [...state.questions]
      questions.push(action.payload.question)
      return {
        ...state,
        questions,
        editQuestion: initialState.editQuestion,
        showNewQuestionModal: false
      }

    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload.msg
      }

    case UPDATE_RECOM_THRESHOLD:
      
      scoreThresholdMap = Object.assign({}, state.scoreThresholdMap)
      scoreThresholdMap[action.payload.category].threshold = action.payload.value

      return {
        ...state,
        scoreThresholdMap
      }

    case UPDATE_RECOM_TEXT:

      scoreThresholdMap = Object.assign({}, state.scoreThresholdMap)
      console.log(action.payload)

      scoreThresholdMap[action.payload.category].recoms[action.payload.key] = action.payload.text

      return {
        ...state,
        scoreThresholdMap
      }

    default:
      return state
  }
}