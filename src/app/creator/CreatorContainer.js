import { connect } from "react-redux"
import CreatorComponent from "./CreatorComponent"
import { fetchDataMock, handleLanguageChange, createJSON, createAmazonConnectConfig, downloadJSON } from "./duck/operations"

export const mapStateToProps = (state, ownProps) => ({
  order: state.creator.order,
  stringMap: state.creator.stringMap,
  language: state.creator.language,
  chariteData: state.creator.chariteData,
  connectConf: state.creator.connectConf
})

export const mapDispatchToProps = {
  fetchDataMock,
  handleLanguageChange,
  createJSON,
  createAmazonConnectConfig,
  downloadJSON
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatorComponent)