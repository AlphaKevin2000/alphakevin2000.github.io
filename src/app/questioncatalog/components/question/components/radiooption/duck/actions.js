export const CHANGE_QUESTION_ATTRIBUTE = "CHANGE_QUESTION_ATTRIBUTE"
export const UPDATE_NEW_RADIO_OPTION = "UPDATE_NEW_RADIO_OPTION"

export const changeQuestionAttribute = (value, attribute, uuid) => ({
  type: CHANGE_QUESTION_ATTRIBUTE,
  payload: { value, attribute, uuid }
})

export const updateNewRadioOption = option => ({
  type: UPDATE_NEW_RADIO_OPTION,
  payload: { option }
})