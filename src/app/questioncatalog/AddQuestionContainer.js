import { connect } from "react-redux"
import AddQuestionComponent from "./AddQuestionComponent"
import {
  handleAddQuestion,
  handleUpateQuestion,
  handleQuestionTextChange,
  handleQuestionTypeChange
} from "./duck/operations"


export const mapStateToProps = (state, ownProps) => ({
  question: state.questioncatalog.newQuestion
})

export const mapDispatchToProps = {
  handleAddQuestion,
  handleUpateQuestion,
  handleQuestionTextChange,
  handleQuestionTypeChange
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestionComponent)