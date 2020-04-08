import { uuid } from "uuidv4"
import { combineReducers } from "redux"
import {
  UPDATE_NEW_RADIO_OPTION,
  questionActionTypes,
  messageActionTypes,
  scoreThresholdActionTypes,
  newQuestionActionTypes
} from "./actions"


import Sample from "./sample"
//import SampleSmall from "./sample_small"

// TODO: Move this
export const findTargetQuestionIndex = (questions, uuid) => questions.findIndex(q => q.uuid === uuid)
export const findTargetQuestion = (questions, uuid) => questions.find(q => q.uuid === uuid)


export const initialStateQuestions = {
  questions: Sample.map(s => Object.assign({}, s, { uuid: uuid() }))
}

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
      questions = [...state.questions].filter(q => q.uuid !== action.payload.uuid)

      return {
        ...state,
        questions
      }

    case ADD_QUESTION:
      questions = [...state.questions]

      if (questions.some(q => q.uuid === action.payload.question.uuid)) { // already exists
        return state
      }

      questions.push(action.payload.question)
      return {
        ...state,
        questions,
        showNewQuestionModal: false
      }

    case MOVE_QUESTION:
      // working now and total overkill. refactor this
      let arr = [...state.questions]
      index = arr.findIndex(question => question.uuid === action.payload.uuid)
      let newIndex = index + action.payload.direction

      if (newIndex < 0 || newIndex >= arr.length) {
        return state
      }
      arr.splice(newIndex, 0, arr.splice(index, 1)[0])
      questions = arr.map(question => Object.assign({}, JSON.parse(JSON.stringify(question))))

      return {
        ...state,
        questions
      }

    case CHANGE_QUESTION_ATTRIBUTE:
      questions = [...state.questions]
      targetQuestionIndex = findTargetQuestionIndex(questions, action.payload.uuid)
      targetQuestion = questions[targetQuestionIndex]
      targetQuestion[action.payload.attribute] = action.payload.value
      questions[targetQuestionIndex] = Object.assign({}, targetQuestion)

      return {
        questions
      }

    default:
      return state
  }
}

export const initialStateCategories = {
  categories: ["contact", "personalInfo", "symptoms", "respiratorySymptoms", "illnesses", "medication"]
}

export const categoriesReducer = (state = initialStateCategories, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const initialStateScoreThresholdMap = {
  contact: {
    threshold: 14, //tage
    recoms: {
      isDanger: "Contact last 14 days",
      isSafe: "No contact last 14 days"
    }
  },
  personalInfo: {
    threshold: 0,
    recoms: {
      isDanger: "",
      isSafe: ""
    }
  },
  symptoms: {
    threshold: 0,
    recoms: {
      isDanger: "",
      isSafe: ""
    }
  },
  respiratorySymptoms: {
    threshold: 0,
    recoms: {
      isDanger: "",
      isSafe: ""
    }
  },
  illnesses: {
    threshold: 0,
    recoms: {
      isDanger: "",
      isSafe: ""
    }
  },
  medication: {
    threshold: 0,
    recoms: {
      isDanger: "",
      isSafe: ""
    }
  }
}

export const scoreThresholdMapReducer = (state = initialStateScoreThresholdMap, action) => {
  const { UPDATE_RECOM_THRESHOLD, UPDATE_RECOM_TEXT } = scoreThresholdActionTypes
  let scoreThresholdMap
  switch (action.type) {
    case UPDATE_RECOM_THRESHOLD:

      scoreThresholdMap = Object.assign({}, state)
      scoreThresholdMap[action.payload.category].threshold = action.payload.value

      return {
        ...scoreThresholdMap
      }

    case UPDATE_RECOM_TEXT:
      scoreThresholdMap = Object.assign({}, state)
      scoreThresholdMap[action.payload.category].recoms[action.payload.key] = action.payload.text

      return {
        ...scoreThresholdMap
      }
    default:
      return state
  }
}

export const initialStateCategoryBadges = {
  contact: "danger",
  personalInfo: "success",
  symptoms: "warning",
  respiratorySymptoms: "primary",
  illnesses: "dark",
  medication: "secondary"
}

export const categoryBadgesReducer = (state = initialStateCategoryBadges, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const initialStateNewQuestion = {
  id: "",
  text: "",
  inputType: "",
  category: "",
  showNewQuestionModal: false,
  uuid: uuid()
}

export const newQuestionReducer = (state = initialStateNewQuestion, action) => {
  const { TOGGLE_NEWQUESTION_MODAL, CHANGE_NEWQUESTION_ATTRIBUTE } = newQuestionActionTypes
  switch (action.type) {
    case TOGGLE_NEWQUESTION_MODAL:
      return {
        ...state,
        showNewQuestionModal: action.payload.value
      }
    case CHANGE_NEWQUESTION_ATTRIBUTE:
      const attr = Object.assign({}, state.editQuestion, { [action.payload.key]: action.payload.value })
      return {
        ...state,
        ...attr
      }
    default:
      return state
  }
}

export const initialStateMessages = {
  errorMessage: "",
  infoMessage: "",
  successMessage: ""
}

export const messagesReducer = (state = initialStateMessages, action) => {
  switch (action.type) {
    case messageActionTypes.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload.msg
      }
    default:
      return state
  }
}

export const initialStateNewRadioOption = {
  newRadioOption: ""
}

export const newRadioOptionReducer = (state = initialStateNewRadioOption, action) => {
  switch (action.type) {
    case UPDATE_NEW_RADIO_OPTION:
      return {
        newRadioOption: action.payload.option
      }
    default:
      return state
  }
}

export const initialStateInputTypes = {
  inputTypes: ["radio", "date"]
}

export const inputTypesReducer = (state = initialStateInputTypes, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  questions: questionsReducer,
  categories: categoriesReducer,
  scoreThresholdMap: scoreThresholdMapReducer,
  categoryBadges: categoryBadgesReducer,
  newQuestion: newQuestionReducer,
  messages: messagesReducer,
  newRadioOption: newRadioOptionReducer,
  inputTypes: inputTypesReducer
})