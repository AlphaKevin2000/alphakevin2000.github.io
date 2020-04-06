export const UPDATE_QUESTION = "UPDATE_QUESTION"
export const REMOVE_QUESTION = "REMOVE_QUESTION"
export const ADD_QUESTION = "ADD_QUESTION"
export const MOVE_QUESTION = "MOVE_QUESTION"
export const CHANGE_QUESTION_ATTRIBUTE = "CHANGE_QUESTION_ATTRIBUTE" // should make CHANGE_x obsolete
export const RENAME_QUESTION = "RENAME_QUESTION"
export const CHANGE_QUESTION_TEXT = "CHANGE_QUESTION_TEXT"
export const CHANGE_QUESTION_CATEGORY = "CHANGE_QUESTION_CATEGORY"
export const CHANGE_QUESTION_TYPE = "CHANGE_QUESTION_TYPE"

export const UPDATE_RADIO_OPTION = "UPDATE_RADIO_OPTION"
export const REMOVE_RADIO_OPTION = "REMOVE_RADIO_OPTION"
export const ADD_NEW_RADIO_OPTION = "ADD_NEW_RADIO_OPTION"
export const UPDATE_NEW_RADIO_OPTION = "UPDATE_NEW_RADIO_OPTION"

export const REMOVE_OPTIONS = "REMOVE_OPTIONS"
export const ADD_OPTIONS = "ADD_OPTIONS"
export const REMOVE_NEXTQUESTIONMAP = "REMOVE_NEXTQUESTIONMAP"
export const ADD_NEXTQUESTIONMAP = "ADD_NEXTQUESTIONMAP"
export const UPDATE_NEXTQUESTIONMAP_OPTION = "UPDATE_NEXTQUESTIONMAP_OPTION"
export const ADD_NEXTQUESTIONMAP_OPTION = "ADD_NEXTQUESTIONMAP_OPTION"

export const REMOVE_SCOREMAP = "REMOVE_SCOREMAP"
export const ADD_SCOREMAP = "ADD_SCOREMAP"
export const UPDATE_SCORENMAP_OPTION = "UPDATE_SCOREMAP_OPTION"
export const ADD_SCOREMAP_OPTION = "ADD_SCOREMAP_OPTION"

export const TOGGLE_NEWQUESTION_MODAL = "TOGGLE_NEWQUESTION_MODAL"
export const CHANGE_NEWQUESTION_ATTRIBUTE = "CHANGE_NEWQUESTION_ATTRIBUTE"

export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE"
export const SET_INFO_MESSAGE = "SET_INFO_MESSAGE"
export const SET_SUCCESS_MESSAGE = "SET_SUCCESS_MESSAGE"

export const UPDATE_RECOM_THRESHOLD = "UPDATE_RECOM_THRESHOLD"
export const UPDATE_RECOM_TEXT = "UPDATE_RECOM_TEXT"

// TODO: action to set question type ['radio', 'date']
// TODO later: so many actions have same structure => DRY 

export const questionActionTypes = {
  UPDATE_QUESTION,
  REMOVE_QUESTION,
  ADD_QUESTION,
  MOVE_QUESTION,
  CHANGE_QUESTION_ATTRIBUTE
}

export const newQuestionActionTypes = {
  TOGGLE_NEWQUESTION_MODAL,
  CHANGE_NEWQUESTION_ATTRIBUTE
}

export const messageActionTypes = {
  SET_ERROR_MESSAGE,
  SET_INFO_MESSAGE,
  SET_SUCCESS_MESSAGE
}

export const scoreThresholdActionTypes = {
  UPDATE_RECOM_THRESHOLD,
  UPDATE_RECOM_TEXT
}


export const updateQuestion = question => ({
  type: UPDATE_QUESTION,
  payload: { question }
})

export const removeQuestion = uuid => ({
  type: REMOVE_QUESTION,
  payload: { uuid }
})

export const changeQuestionAttribute = (value, attribute, uuid) => ({
  type: CHANGE_QUESTION_ATTRIBUTE,
  payload: { value, attribute, uuid }
})

export const moveQuestion = (uuid, direction) => ({
  type: MOVE_QUESTION,
  payload: { uuid, direction }
})

export const updateRadioOption = (value, uuid, index) => ({
  type: UPDATE_RADIO_OPTION,
  payload: { value, uuid, index }
})

export const removeRadioOption = (uuid, index) => ({
  type: REMOVE_RADIO_OPTION,
  payload: { uuid, index }
})

export const addNewRadioOption = (option, uuid) => ({
  type: ADD_NEW_RADIO_OPTION,
  payload: { option, uuid }
})

export const updateNewRadioOption = option => ({
  type: UPDATE_NEW_RADIO_OPTION,
  payload: { option }
})

export const removeOptions = uuid => ({
  type: REMOVE_OPTIONS,
  payload: { uuid }
})

export const addOptions = uuid => ({
  type: ADD_OPTIONS,
  payload: { uuid }
})

export const removeNextQuestionMap = uuid => ({
  type: REMOVE_NEXTQUESTIONMAP,
  payload: { uuid }
})

export const addNextQuestionMap = uuid => ({
  type: ADD_NEXTQUESTIONMAP,
  payload: { uuid }
})

export const updateNextQuestionMapOption = (value, uuid, index) => ({
  type: UPDATE_NEXTQUESTIONMAP_OPTION,
  payload: { value, uuid, index }
})

export const addNextQuestionMapOption = (uuid) => ({
  type: ADD_NEXTQUESTIONMAP_OPTION,
  payload: { uuid }
})

export const removeScoreMap = uuid => ({
  type: REMOVE_SCOREMAP,
  payload: { uuid }
})

export const addScoreMap = uuid => ({
  type: ADD_SCOREMAP,
  payload: { uuid }
})

export const updateScoreMapOption = (value, uuid, index) => ({
  type: UPDATE_SCORENMAP_OPTION,
  payload: { value, uuid, index }
})

export const addScoreMapOption = uuid => ({
  type: ADD_SCOREMAP_OPTION,
  payload: { uuid }
})


export const toggleNewQuestionModal = value => ({
  type: TOGGLE_NEWQUESTION_MODAL,
  payload: { value }
})

export const changeNewQuestionAttribute = (value, key) => ({
  type: CHANGE_NEWQUESTION_ATTRIBUTE,
  payload: { value, key }
})

export const addQuestion = question => ({
  type: ADD_QUESTION,
  payload: { question }
})

export const setErrorMessage = msg => ({
  type: SET_ERROR_MESSAGE,
  payload: { msg }
})

export const updateRecomText = (text, category, key) => ({
  type: UPDATE_RECOM_TEXT,
  payload: {text, category, key}
})

export const updateRecomThreshold = (value, category) => ({
  type: UPDATE_RECOM_THRESHOLD,
  payload: {value, category }
})