import { connect } from "react-redux"
import CreatorComponent from "./CreatorComponent"
import { fetchDataMock, handleLanguageChange, createJSON } from "./duck/operations"

export const mapStateToProps = (state, ownProps) => ({
  order: state.creator.order,
  stringMap: state.creator.stringMap,
  language: state.creator.language,
  data: state.creator.data
})

export const mapDispatchToProps = {
  fetchDataMock,
  handleLanguageChange,
  createJSON  
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatorComponent)