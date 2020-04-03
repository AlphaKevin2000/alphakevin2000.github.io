import { connect } from "react-redux"
import QuestionCatalogComponent from "./QuestionCatalogComponent"
import {
  handleRemoveQuestion,
  handleMoveQuestion
} from "./duck/operations"


export const mapStateToProps = (state, ownProps) => ({
  questions: state.questioncatalog.questions
})

export const mapDispatchToProps = {
  handleRemoveQuestion,
  handleMoveQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCatalogComponent)