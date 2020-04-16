import { connect } from "react-redux"
import DBItemListComponent from "./DBItemListComponent"

export const mapStateToProps = (state, ownProps) => ({
  dbitems: state.india.dbitems
})

export const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(DBItemListComponent)