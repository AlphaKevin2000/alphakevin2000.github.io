import { connect } from "react-redux"
import RadioOptionComponent from "./RadioOptionComponent"
import {
  handleUpdateRadioOption,
  handleUpdateNewRadioOption,
  handleAddNewRadioOption,
  handleRemoveRadioOption
} from "./duck/operations"


export const mapStateToProps = (state, ownProps) => ({
  question: ownProps.existingQuestion ? state.questioncatalog.questions.questions.find(q => q === ownProps.existingQuestion) : state.questioncatalog.newQuestion,
  newRadioOption: state.questioncatalog.newRadioOption.newRadioOption
})

export const mapDispatchToProps = {
  handleUpdateRadioOption,
  handleUpdateNewRadioOption,
  handleAddNewRadioOption,
  handleRemoveRadioOption
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioOptionComponent)