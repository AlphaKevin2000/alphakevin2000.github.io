import { connect } from "react-redux"
import AddRadioOptionComponent from "./AddRadioOptionComponent"
import {
  handleAddRadioOption

} from "./duck/operations"


export const mapStateToProps = (state, ownProps) => ({
})

export const mapDispatchToProps = {
  handleAddRadioOption
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRadioOptionComponent)