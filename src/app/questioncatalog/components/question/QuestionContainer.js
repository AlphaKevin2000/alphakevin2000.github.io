import { connect } from "react-redux"
import QuestionComponent from "./QuestionComponent"
import {
  questionOperations
} from "./duck/operations"
import { handleAddNewRadioOption, handleUpdateNewRadioOption } from "./duck/operations"


// TODO: bundle opereation e.g import questionContainerOperations from ./duck/operations


export const mapStateToProps = (state, ownProps) => ({
  index: state.questioncatalog.questions.findIndex(q => q.uuid === ownProps.uuid),
  total: state.questioncatalog.questions.length - 1,
  categoryMap: state.questioncatalog.categoryMap,
  categories: state.questioncatalog.categories,
  inputTypes: state.questioncatalog.inputTypes,
  newRadioOption: state.questioncatalog.newRadioOption
})

export const mapDispatchToProps = {
  ...questionOperations,
  handleAddNewRadioOption,
  handleUpdateNewRadioOption
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionComponent)