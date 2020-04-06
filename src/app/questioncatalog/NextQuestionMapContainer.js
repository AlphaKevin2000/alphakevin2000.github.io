import { connect } from "react-redux"
import NextQuestionMapComponent from "./NextQuestionMapComponent"
import {
  handleUpdateNextQuestionMapOption
} from "./duck/operations"


export const mapStateToProps = (state, ownProps) => ({
  question: ownProps.existingQuestion ? state.questioncatalog.questions.questions.find(q => q === ownProps.existingQuestion) : state.questioncatalog.newQuestion,
  questions: state.questioncatalog.questions.questions
})

export const mapDispatchToProps = {
  handleUpdateNextQuestionMapOption
}

export default connect(mapStateToProps, mapDispatchToProps)(NextQuestionMapComponent)