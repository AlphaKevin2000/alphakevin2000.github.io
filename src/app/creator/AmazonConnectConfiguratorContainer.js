import { connect } from "react-redux"
import AmazonConnectConfiguratorComponent from "./AmazonConnectConfiguratorComponent"

import { 
  createJSON,
  downloadJSON,
  createContactFlow
} from "./duck/operations"

export const mapStateToProps = (state, ownProps) => ({
  chariteData: state.creator.chariteData,
  connectConf: state.creator.connectConf,
  lambdaKeys: state.creator.lambdaKeys
})

export const mapDispatchToProps = {
  createJSON,
  createContactFlow,
  downloadJSON
}

export default connect(mapStateToProps, mapDispatchToProps)(AmazonConnectConfiguratorComponent)