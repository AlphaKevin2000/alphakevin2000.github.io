export const CHANGE_QUESTION_ATTRIBUTE = "CHANGE_QUESTION_ATTRIBUTE"

export const changeQuestionAttribute = (value, attribute, uuid) => ({
  type: CHANGE_QUESTION_ATTRIBUTE,
  payload: { value, attribute, uuid }
})