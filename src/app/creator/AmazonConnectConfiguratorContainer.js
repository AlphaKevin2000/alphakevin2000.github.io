import { connect } from "react-redux"
import AmazonConnectConfiguratorComponent from "./AmazonConnectConfiguratorComponent"

import { 
  createJSON,
  downloadJSON,
  createContactFlow,
  handleSetBasename
} from "./duck/operations"

export const mapStateToProps = (state, ownProps) => ({
  chariteData: state.creator.chariteData,
  connectConf: state.creator.connectConf,
  lambdaKeys: state.creator.lambdaKeys,
  language: state.creator.language,
  basename: state.creator.basename // TODO: better name?
})

export const mapDispatchToProps = {
  createJSON,
  createContactFlow,
  downloadJSON,
  handleSetBasename
}

export default connect(mapStateToProps, mapDispatchToProps)(AmazonConnectConfiguratorComponent)