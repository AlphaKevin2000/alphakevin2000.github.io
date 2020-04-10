import { connect } from "react-redux"
import QuestionCatalogComponent from "./QuestionCatalogComponent"

export const mapStateToProps = (state, ownProps) => ({
  questions: state.questioncatalog.questions
})

export const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCatalogComponent)