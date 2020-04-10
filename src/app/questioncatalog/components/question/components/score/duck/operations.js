import {
  changeQuestionAttribute,
} from "./actions"


export const handleUpdateScoreMapOption = (value, uuid, index) => {
  return (dispatch, getState) => {
    const state = getState()
    const targetQuestion = state.questioncatalog.questions.find(q => q.uuid === uuid)
    const scoreMap = targetQuestion.scoreMap
    scoreMap[index] = value
    dispatch(changeQuestionAttribute(scoreMap, "scoreMap", uuid))
  }
}

export const scoreMapOperations = {
  handleUpdateScoreMapOption
}