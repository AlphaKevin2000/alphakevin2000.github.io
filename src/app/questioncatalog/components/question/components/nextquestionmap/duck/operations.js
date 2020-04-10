import {
  changeQuestionAttribute,
} from "./actions"

export const handleUpdateNextQuestionMapOption = (value, uuid, index) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.find(q => q.uuid === uuid)
    const nextQuestionMap = targetQuestion.nextQuestionMap
    nextQuestionMap[index] = value
    dispatch(changeQuestionAttribute(nextQuestionMap, "nextQuestionMap", uuid))
  }
}