import {
  SET_QUESTIONNAIRE_ORDER,
  SET_QUESTIONNAIRE_STRING_MAP,
  SET_LANGUAGE,
  SET_CREATED_JSON,
  SET_CREATED_AMAZON_CONNECT_CONFIG,
  SET_CREATED_AMAZON_CONNECT_DATA,
  ADD_UUID,
  ADD_KEY,
  SET_QUESTION_COUNT
} from "./actions"

export const initialState = {
  order: undefined,
  stringMap: {'de': undefined, 'en': undefined},
  language: 'en',
  chariteData: undefined,
  connectConf: undefined,
  uuidList: [],
  lambdaKeys: {"lambdaKeys": []},
  basename: "generated_charite_data"
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
    case SET_CREATED_AMAZON_CONNECT_DATA:
      const connectConf = Object.assign({}, state.connectConf, action.payload.data)
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
    case ADD_KEY:
      let lambdaKeys = state.lambdaKeys
  
      if (lambdaKeys["lambdaKeys"].indexOf(action.payload.key) === -1) {
        lambdaKeys["lambdaKeys"].push(action.payload.key)
      }

      return {
        ...state,
        lambdaKeys
      }
    case SET_QUESTION_COUNT:
      return {
        ...state,
        quesitonCount: action.payload.questionCount
      }
    default:
      return state
  }
}