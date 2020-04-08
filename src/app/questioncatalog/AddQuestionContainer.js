import { connect } from "react-redux"
import AddQuestionComponent from "./AddQuestionComponent"
import {
  newQuestionOperations
} from "./duck/operations"


export const mapStateToProps = (state, ownProps) => ({
  newQuestion: state.questioncatalog.newQuestion,
  errorMessage : state.questioncatalog.messages.errorMessage
})

export const mapDispatchToProps = {
  ...newQuestionOperations
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestionComponent)