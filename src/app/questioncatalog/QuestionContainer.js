import { connect } from "react-redux"
import QuestionComponent from "./QuestionComponent"
import {
  handleRemoveQuestion,
  handleMoveQuestion,
  handleToggleNextQuestionMap,
  handleToggleScoreMap,
  handleChangeQuestionID,
  handleChangeQuestionText,
  handleChangeQuestionCategory,
  changeChangeQuestionType
} from "./duck/operations"

// TODO: bundle opereation e.g import questionContainerOperations from ./duck/operations


export const mapStateToProps = (state, ownProps) => ({
  index: state.questioncatalog.questions.questions.findIndex(q => q.uuid === ownProps.uuid),
  total: state.questioncatalog.questions.questions.length - 1
})

export const mapDispatchToProps = {
  handleToggleNextQuestionMap,
  handleToggleScoreMap,
  handleRemoveQuestion,
  handleMoveQuestion,
  handleChangeQuestionID,
  handleChangeQuestionCategory,
  changeChangeQuestionType,
  handleChangeQuestionText
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionComponent)