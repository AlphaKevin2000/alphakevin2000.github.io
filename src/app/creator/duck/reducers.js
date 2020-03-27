import {
  SET_QUESTIONNAIRE_ORDER,
  SET_QUESTIONNAIRE_STRING_MAP,
  SET_LANGUAGE,
  SET_CREATED_JSON
} from "./actions"

export const initialState = {
  order: undefined,
  stringMap: undefined,
  language: 'de',
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONNAIRE_ORDER:
      return {
        ...state,
        order: action.payload.order
      }
    case SET_QUESTIONNAIRE_STRING_MAP:
      return {
        ...state,
        stringMap: action.payload.stringMap
      }
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload.language
      }
    case SET_CREATED_JSON:
      return {
        ...state,
        data: action.payload.data
      }
    default:
      return state
  }
}