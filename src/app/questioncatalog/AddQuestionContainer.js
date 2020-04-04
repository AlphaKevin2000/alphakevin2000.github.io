import { connect } from "react-redux"
import AddQuestionComponent from "./AddQuestionComponent"
import {
  handleToggleNewQuestionModal,
  handleChangeNewQuestion,
  handleAddQuestion
} from "./duck/operations"


export const mapStateToProps = (state, ownProps) => ({
  showNewQuestionModal: state.questioncatalog.showNewQuestionModal,
  editQuestion: state.questioncatalog.editQuestion,
  errorMessage : state.questioncatalog.errorMessage
})

export const mapDispatchToProps = {
  handleToggleNewQuestionModal,
  handleChangeNewQuestion,
  handleAddQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestionComponent)