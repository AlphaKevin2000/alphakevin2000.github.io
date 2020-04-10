import { uuid } from "uuidv4"
import {
  newQuestionActionTypes
} from "./actions"



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

export default newQuestionReducer