import { connect } from "react-redux"
import DBItemComponent from "./DBItemComponent"
import { handleMoveDBItem, handleRemoveDBItem } from "./duck/operations"

export const mapStateToProps = (state, ownProps) => ({
  dbitems: state.india.dbitems
})

export const mapDispatchToProps = {
  handleMoveDBItem,
  handleRemoveDBItem
}

export default connect(mapStateToProps, mapDispatchToProps)(DBItemComponent)