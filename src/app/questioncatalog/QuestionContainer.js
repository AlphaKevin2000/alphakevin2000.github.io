import { connect } from "react-redux"
import QuestionComponent from "./QuestionComponent"
import {
  handleRemoveQuestion,
  handleUpateQuestion,
  handleMoveQuestion
} from "./duck/operations"


export const mapStateToProps = (state, ownProps) => ({
  index: state.questioncatalog.questions.findIndex(q => q.uuid === ownProps.uuid),
  total: state.questioncatalog.questions.length - 1
})

export const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionComponent)