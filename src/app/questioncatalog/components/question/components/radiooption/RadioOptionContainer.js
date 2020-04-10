import { connect } from "react-redux"
import RadioOptionComponent from "./RadioOptionComponent"
import {
  radioOptionOperations
} from "./duck/operations"


export const mapStateToProps = (state, ownProps) => ({
  question: ownProps.existingQuestion ? state.questioncatalog.questions.find(q => q === ownProps.existingQuestion) : state.questioncatalog.newQuestion,
  newRadioOption: state.questioncatalog.newRadioOption
})

export const mapDispatchToProps = {
  ...radioOptionOperations
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioOptionComponent)