import { combineReducers } from "redux"
import reduceReducers  from "reduce-reducers"
import newQuestionReducer from "../components/newquestion/duck"
import scoreThresholdMapReducer from "../components/logic/duck"
import questionsReducer from "../components/question/duck"
import {
  UPDATE_NEW_RADIO_OPTION,
  messageActionTypes,
} from "./actions"

export const initialStateCategories = ["contact", "personalInfo", "symptoms", "respiratorySymptoms", "illnesses", "medication"]


export const categoriesReducer = (state = initialStateCategories, action) => {
  switch (action.type) {
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

export const initialStateNewRadioOption = ""

export const newRadioOptionReducer = (state = initialStateNewRadioOption, action) => {
  switch (action.type) {
    case UPDATE_NEW_RADIO_OPTION:
      return action.payload.option
    default:
      return state
  }
}

export const initialStateInputTypes = ["radio", "date"]

export const inputTypesReducer = (state = initialStateInputTypes, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const questionCatalogReducer = combineReducers({
  categories: categoriesReducer,
  categoryMap: categoryBadgesReducer,
  messages: messagesReducer,
  newRadioOption: newRadioOptionReducer,
  inputTypes: inputTypesReducer,
  scoreThresholdMap: scoreThresholdMapReducer,
  newQuestion: newQuestionReducer,
  questions: questionsReducer
})

export default reduceReducers(questionCatalogReducer)