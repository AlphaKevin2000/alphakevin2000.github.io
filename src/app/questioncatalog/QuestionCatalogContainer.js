import { connect } from "react-redux"
import QuestionCatalogComponent from "./QuestionCatalogComponent"
import {
  handleRemoveQuestion,
  handleUpateNewQuestion,
  handleMoveQuestion
} from "./duck/operations"


export const mapStateToProps = (state, ownProps) => ({
  questions: state.questioncatalog.questions
})

export const mapDispatchToProps = {
  handleRemoveQuestion,
  handleUpateNewQuestion,
  handleMoveQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCatalogComponent)