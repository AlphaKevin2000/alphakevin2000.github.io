import { connect } from "react-redux"
import ScoreComponent from "./ScoreComponent"
import {
  handleUpdateScoreMapOption
} from "./duck/operations"


export const mapStateToProps = (state, ownProps) => ({
  question: ownProps.existingQuestion ? state.questioncatalog.questions.find(q => q === ownProps.existingQuestion) : state.questioncatalog.newQuestion,
  questions: state.questioncatalog.questions})

export const mapDispatchToProps = {
  handleUpdateScoreMapOption
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreComponent)