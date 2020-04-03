import { connect } from "react-redux"
import QuestionComponent from "./QuestionComponent"
import {
  handleRemoveQuestion,
  handleMoveQuestion,
  handleToggleNextQuestionMap
} from "./duck/operations"


export const mapStateToProps = (state, ownProps) => ({
  index: state.questioncatalog.questions.findIndex(q => q.uuid === ownProps.uuid),
  total: state.questioncatalog.questions.length - 1
})

export const mapDispatchToProps = {
  handleToggleNextQuestionMap,
  handleRemoveQuestion,
  handleMoveQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionComponent)