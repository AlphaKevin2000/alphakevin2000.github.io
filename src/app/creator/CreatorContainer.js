import { connect } from "react-redux"
import CreatorComponent from "./CreatorComponent"
import { 
  fetchDataMock,
  handleLanguageChange,
  createJSON,
  downloadJSON,
  createContactFlow
} from "./duck/operations"

export const mapStateToProps = (state, ownProps) => ({
  order: state.creator.order,
  stringMap: state.creator.stringMap,
  language: state.creator.language,
  chariteData: state.creator.chariteData,
  connectConf: state.creator.connectConf,
  lambdaKeys: state.creator.lambdaKeys
})

export const mapDispatchToProps = {
  fetchDataMock,
  handleLanguageChange,
  createJSON,
  createContactFlow,
  downloadJSON,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatorComponent)