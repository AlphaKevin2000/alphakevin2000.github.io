import { connect } from "react-redux"
import QuestionComponent from "./QuestionComponent"
import {
  questionOperations
} from "./duck/operations"

// TODO: bundle opereation e.g import questionContainerOperations from ./duck/operations


export const mapStateToProps = (state, ownProps) => ({
  index: state.questioncatalog.questions.questions.findIndex(q => q.uuid === ownProps.uuid),
  total: state.questioncatalog.questions.questions.length - 1,
  categoryMap: state.questioncatalog.categoryBadges,
  inputTypes: state.questioncatalog.inputTypes.inputTypes
})

export const mapDispatchToProps = {
  ...questionOperations
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionComponent)