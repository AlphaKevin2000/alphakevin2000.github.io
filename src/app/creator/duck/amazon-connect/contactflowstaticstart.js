import { uuid } from "uuidv4"
import PropTypes from "prop-types"
import { EmptyContactFlow } from "./emptycontactflow"
import { ContactFlowError } from "./contactflowerror"
import { ContactFlowEnd } from "./contactflowend"
import { ContactFlowTransfer } from "./contactflowtransfer"
import { ContactFlowLogging } from "./contactflowlogging"
import { ContactFlowVoice } from "./contactflowvoice"
import { ContactFlowPlayPrompt } from "./contactflowplayprompt"


export const defaultProps = {
  name: "generated_charite_data_start"
}

export const propTypes = {
  name: PropTypes.string
}


export const ContactFlowStaticStart = ({
    name = defaultProps.name
  }) => {
    const loggingUUUID = uuid()
    const startErrorUUID = uuid()
    const startEndUUID = uuid()
    const startTransferUUID = uuid()
    const voiceUUID = uuid()
    const greetingUUID = uuid()

    const staticStart = EmptyContactFlow({
      startUUID: loggingUUUID,
      name: name
    })
    const startModules = []

    const startError = ContactFlowError({
      ownUUID: startErrorUUID,
      transitionUUID: startEndUUID
    })
    startModules.push(startError)

    const startEnd = ContactFlowEnd({
      ownUUID: startEndUUID
    })
    startModules.push(startEnd)

    const startTransfer = ContactFlowTransfer({
      ownUUID: startTransferUUID,
      transitionUUID: voiceUUID,
      errorUUID: startErrorUUID
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
      errorUUID: startErrorUUID
    })
    startModules.push(startVoice)

    const startGreeting = ContactFlowPlayPrompt({
      ownUUID: greetingUUID,
      transitionUUID: startTransferUUID,
      errorUUID: startErrorUUID,
      text: "miau"
    })
    startModules.push(startGreeting)

    staticStart.modules = startModules

    return staticStart
}

ContactFlowStaticStart.propTypes = propTypes
ContactFlowStaticStart.defaultProps = defaultProps

export default ContactFlowStaticStart