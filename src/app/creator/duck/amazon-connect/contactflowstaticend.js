import PropTypes from "prop-types"
import { uuid } from "uuidv4"
import { EmptyContactFlow } from "./emptycontactflow"
import { ContactFlowError } from "./contactflowerror"
import { ContactFlowEnd } from "./contactflowend"
import { ContactFlowInvokeExternal } from "./contactflowinvokeexternal"
import { ContactFlowAttribute } from "./contactflowattribute"
import { ContactFlowPlayPrompt } from "./contactflowplayprompt"

export const defaultProps = {
  name: "generated_charite_data_29"
}

export const propTypes = {
  getState: PropTypes.func.isRequired,
  name: PropTypes.string
}


export const ContactFlowStaticEnd = ({
    getState,
    name = defaultProps.name
  }) => {

    const finishUUID = uuid()
    const endErrorUUID = uuid()
    const lambdaUUID = uuid()
    const recomUUID = uuid()
    const recomSpeechUUID = uuid()

    const staticEnd = EmptyContactFlow({
      startUUID: lambdaUUID,
      name: name
    })
    const endModules = []

    const endError = ContactFlowError({
      ownUUID: endErrorUUID,
      transitionUUID: finishUUID
    })
    endModules.push(endError)

    const finishLine = ContactFlowEnd({ownUUID: finishUUID})
    endModules.push(finishLine)

    const finalState = getState()
    const lambdaKeys = finalState.creator.lambdaKeys.lambdaKeys

    const lambdaCall = ContactFlowInvokeExternal({
      ownUUID: lambdaUUID,
      errorUUID: endErrorUUID,
      lambdaKeys: lambdaKeys,
      transitionUUID: recomUUID
    })
    endModules.push(lambdaCall)

    const recomAttr = ContactFlowAttribute({
      ownUUID: recomUUID,
      errorUUID: endErrorUUID,
      value: "$.External.recommendation",
      key: "recommendation",
      positionX: 400,
      positionY: 400,
      transitionUUID: recomSpeechUUID
    })
    endModules.push(recomAttr)

    const recomVoice = ContactFlowPlayPrompt({
      ownUUID: recomSpeechUUID,
      transitionUUID: finishUUID,
      errorUUID: endErrorUUID,
      text: "$.External.word1 und $.External.word2"
    })
    endModules.push(recomVoice)

    staticEnd.modules = endModules

    return staticEnd
}

ContactFlowStaticEnd.propTypes = propTypes
ContactFlowStaticEnd.defaultProps = defaultProps

export default ContactFlowStaticEnd