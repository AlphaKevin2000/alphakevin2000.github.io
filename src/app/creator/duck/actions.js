export const SET_QUESTIONNAIRE_STRING_MAP = "SET_QUESTIONNAIRE_STRING_MAP"
export const SET_QUESTIONNAIRE_ORDER = "SET_QUESTIONNAIRE_ORDER"
export const SET_LANGUAGE = "SET_LANGUAGE"
export const SET_CREATED_JSON = "SET_CREATED_JSON"
export const SET_CREATED_AMAZON_CONNECT_CONFIG = "SET_CREATED_AMAZON_CONNECT_CONFIG"
export const SET_CREATED_AMAZON_CONNECT_DATA = "SET_CREATED_AMAZON_CONNECT_DATA"
export const ADD_CONTACT_FLOW = "ADD_CONTACT_FLOW"
export const ADD_UUID = "ADD_UUID"
export const ADD_KEY = "ADD_KEY"

export const setQuestionnaireStrings = stringMap => ({
  type: SET_QUESTIONNAIRE_STRING_MAP,
  payload: { stringMap }
})

export const setQuestionnaireOrder = order => ({
  type: SET_QUESTIONNAIRE_ORDER,
  payload: { order }
})

export const setLanguage = language => ({
  type: SET_LANGUAGE,
  payload: { language }
})

export const setCreatedJSON = data => ({
  type: SET_CREATED_JSON,
  payload: { data }
})

export const setCreatedAmazonConnectConfig = data => ({
  type: SET_CREATED_AMAZON_CONNECT_CONFIG,
  payload: { data }
})

export const setAmazonConnectData = data => ({
  type: SET_CREATED_AMAZON_CONNECT_DATA,
  payload: { data }
})

export const addContactFlow = contactFlow => ({
  type: ADD_CONTACT_FLOW,
  payload: { contactFlow }
})

export const addUUID = uuid => ({
  type: ADD_UUID,
  payload: { uuid }
})

export const addKey = key => ({
  type: ADD_KEY,
  payload: { key }
})