import { connect } from "react-redux"
import QuestionCatalogComponent from "./QuestionCatalogComponent"
import { handleChangeFont } from "./duck/operations"
import { newQuestionOperations } from "./components/newquestion/duck/operations"

export const mapStateToProps = (state, ownProps) => ({
  questions: state.questioncatalog.questions,
  categories: state.questioncatalog.categories,
  newQuestion: state.questioncatalog.newQuestion,
  errorMessage : state.questioncatalog.messages.errorMessage,
  activeFont: state.questioncatalog.fonts.activeFont
})

export const mapDispatchToProps = {
  ...newQuestionOperations,
  handleChangeFont
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCatalogComponent)