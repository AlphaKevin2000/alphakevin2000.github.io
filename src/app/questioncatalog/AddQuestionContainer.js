import { connect } from "react-redux"
import AddQuestionComponent from "./AddQuestionComponent"
import {
  handleNewQuestionAdd,
  handleUpateNewQuestion,
  handleNewQuestionTextChange,
  handleNewQuestionTypeChange
} from "./duck/operations"


export const mapStateToProps = (state, ownProps) => ({
  question: state.questioncatalog.newQuestion
})

export const mapDispatchToProps = {
  handleNewQuestionAdd,
  handleUpateNewQuestion,
  handleNewQuestionTextChange,
  handleNewQuestionTypeChange
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestionComponent)