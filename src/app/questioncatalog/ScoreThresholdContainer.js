import { connect } from "react-redux"
import ScoreThresholdComponent from "./ScoreThresholdComponent"
import {
  logicOperations
} from "./duck/operations"


// move & rename this
export const getSomething = questions => {
  const totalScoreQuestions = {}
  // TODO: compete in the next obfuscating contest...
  questions
    .filter(q => q.hasOwnProperty("scoreMap"))
    .forEach(f => totalScoreQuestions.hasOwnProperty(f.category) ? totalScoreQuestions[f.category]++ : totalScoreQuestions[f.category] = 1)
  return totalScoreQuestions
}



export const mapStateToProps = (state, ownProps) => ({
  scoreThresholdMap: state.questioncatalog.scoreThresholdMap,
  categories: state.questioncatalog.categories,
  totalScoreQuestions: getSomething([...state.questioncatalog.questions.questions])
})

export const mapDispatchToProps = {
  ...logicOperations
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreThresholdComponent)