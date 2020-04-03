import { connect } from "react-redux"
import QuestionComponent from "./QuestionComponent"
import {
  handleRemoveQuestion,
  handleMoveQuestion,
  handleToggleNextQuestionMap,
  handleRenameQuestion,
  handleChangeQuestionCategory,
  changeChangeQuestionType
} from "./duck/operations"

// TODO: bundle opereation e.g import questionContainerOperations from ./duck/operations


export const mapStateToProps = (state, ownProps) => ({
  index: state.questioncatalog.questions.findIndex(q => q.uuid === ownProps.uuid),
  total: state.questioncatalog.questions.length - 1
})

export const mapDispatchToProps = {
  handleToggleNextQuestionMap,
  handleRemoveQuestion,
  handleMoveQuestion,
  handleRenameQuestion,
  handleChangeQuestionCategory,
  changeChangeQuestionType
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionComponent)