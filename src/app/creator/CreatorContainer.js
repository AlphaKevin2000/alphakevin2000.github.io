import { connect } from "react-redux"
import CreatorComponent from "./CreatorComponent"
import { 
  getQuestionsAndGenerateJSONMock,
  handleLanguageChange
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
  getQuestionsAndGenerateJSONMock,
  handleLanguageChange
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatorComponent)