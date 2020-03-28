import {
  SET_QUESTIONNAIRE_ORDER,
  SET_QUESTIONNAIRE_STRING_MAP,
  SET_LANGUAGE,
  SET_CREATED_JSON,
  SET_CREATED_AMAZON_CONNECT_CONFIG,
  ADD_CONTACT_FLOW,
  ADD_UUID
} from "./actions"
import { connect } from "react-redux"

export const initialState = {
  order: undefined,
  stringMap: {'de': undefined, 'en': undefined},
  language: 'de',
  chariteData: undefined,
  connectConf: undefined,
  uuidList: []
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
        chariteData: action.payload.data
      }
    case SET_CREATED_AMAZON_CONNECT_CONFIG:
      return {
        ...state,
        connectConf: action.payload.data
      }
    case ADD_CONTACT_FLOW:
      const connectConf = Object.assign({}, state.connectConf)
      connectConf.modules.push(action.payload.contactFlow)
      return {
        ...state,
        connectConf
      }
    case ADD_UUID:
      const uuidList = [...state.uuidList]
      uuidList.push(action.payload.uuid)
      return {
        ...state,
        uuidList
      }
    default:
      return state
  }
}