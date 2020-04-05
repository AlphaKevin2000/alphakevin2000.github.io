export const UPDATE_QUESTION = "UPDATE_QUESTION"
export const REMOVE_QUESTION = "REMOVE_QUESTION"
export const MOVE_QUESTION = "MOVE_QUESTION"
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


/* START NEW QUESTION ACTION TYPES */
export const TOGGLE_NEWQUESTION_MODAL = "TOGGLE_NEWQUESTION_MODAL"
export const CHANGE_NEW_QUESTION = "CHANGE_NEW_QUESTION"
export const ADD_QUESTION = "ADD_QUESTION"
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE"


// TODO: action to set question type ['radio', 'date']
// TODO later: so many actions have same structure => DRY 


export const updateQuestion = question => ({
  type: UPDATE_QUESTION,
  payload: { question }
})

export const removeQuestion = uuid => ({
  type: REMOVE_QUESTION,
  payload: { uuid }
})

export const renameQuestion = (value, uuid) => ({
  type: RENAME_QUESTION,
  payload: { value, uuid }
})

export const changeQuestionText = (value, uuid) => ({
  type: CHANGE_QUESTION_TEXT,
  payload: { value, uuid }
})

export const changeQuestionCategory = (value, uuid) => ({
  type: CHANGE_QUESTION_CATEGORY,
  payload: { value, uuid }
})

export const changeQuestionType = (value, uuid) => ({
  type: CHANGE_QUESTION_TYPE,
  payload: { value, uuid }
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

export const changeNewQuestion = (value, key) => ({
  type: CHANGE_NEW_QUESTION,
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