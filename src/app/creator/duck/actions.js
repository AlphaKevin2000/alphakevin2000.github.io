export const SET_QUESTIONNAIRE_STRING_MAP = "SET_QUESTIONNAIRE_STRING_MAP"
export const SET_QUESTIONNAIRE_ORDER = "SET_QUESTIONNAIRE_ORDER"
export const SET_LANGUAGE = "SET_LANGUAGE"
export const SET_CREATED_JSON = "SET_CREATED_JSON"


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