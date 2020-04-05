import { uuid } from "uuidv4"
import PropTypes from "prop-types"
import { EmptyContactFlow } from "./emptycontactflow"
import { ContactFlowError } from "./contactflowerror"
import { ContactFlowEnd } from "./contactflowend"
import { ContactFlowTransfer } from "./contactflowtransfer"
import { ContactFlowLogging } from "./contactflowlogging"
import { ContactFlowVoice } from "./contactflowvoice"
import { ContactFlowPlayPrompt } from "./contactflowplayprompt"
import { defaultText } from "../questions/defaultText"


export const defaultProps = {
  name: "automated_charite_data_start",
  text: "miau"
}

export const propTypes = {
  name: PropTypes.string,
  text: PropTypes.string
}


export const ContactFlowStaticStart = ({
    language,
    firstQuestionName,
    name = defaultProps.name,
    text = defaultProps.text
  }) => {
    const loggingUUUID = uuid()
    const startErrorUUID = uuid()
    const startEndUUID = uuid()
    const startTransferUUID = uuid()
    const voiceUUID = uuid()
    const greetingUUID = uuid()

    alert(name)

    const staticStart = EmptyContactFlow({
      startUUID: loggingUUUID,
      name: name,
      description: "start"
    })
    const startModules = []

    const startError = ContactFlowError({
      ownUUID: startErrorUUID,
      transitionUUID: startEndUUID,
      errorText: defaultText.errorText[language]
    })
    startModules.push(startError)

    const startEnd = ContactFlowEnd({
      ownUUID: startEndUUID
    })
    startModules.push(startEnd)

    const startTransfer = ContactFlowTransfer({
      ownUUID: startTransferUUID,
      transitionUUID: voiceUUID,
      errorUUID: startErrorUUID,
      resourceName: firstQuestionName
    })
    startModules.push(startTransfer)

    const startLogging = ContactFlowLogging({
      ownUUID: loggingUUUID,
      transitionUUID: voiceUUID,
      errorUUID: startErrorUUID
    })
    startModules.push(startLogging)

    const startVoice = ContactFlowVoice({
      ownUUID: voiceUUID,
      transitionUUID: greetingUUID,
      errorUUID: startErrorUUID,
      voiceType: defaultText.defaultVoice[language]
    })
    startModules.push(startVoice)

    const startGreeting = ContactFlowPlayPrompt({
      ownUUID: greetingUUID,
      transitionUUID: startTransferUUID,
      errorUUID: startErrorUUID,
      text: text
    })
    startModules.push(startGreeting)

    staticStart.modules = startModules

    return staticStart
}

ContactFlowStaticStart.propTypes = propTypes
ContactFlowStaticStart.defaultProps = defaultProps

export default ContactFlowStaticStart