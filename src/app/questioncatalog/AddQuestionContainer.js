import { connect } from "react-redux"
import AddQuestionComponent from "./AddQuestionComponent"
import {
  handleToggleNewQuestionModal,
  handleChangeNewQuestion,
  handleAddQuestion
} from "./duck/operations"


export const mapStateToProps = (state, ownProps) => ({
  newQuestion: state.questioncatalog.newQuestion,
  errorMessage : state.questioncatalog.messages.errorMessage
})

export const mapDispatchToProps = {
  handleToggleNewQuestionModal,
  handleChangeNewQuestion,
  handleAddQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestionComponent)