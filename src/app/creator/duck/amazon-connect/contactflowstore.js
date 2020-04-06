//import PropTypes from "prop-types"
import { uuid } from "uuidv4"
import { ContactFlowAttribute } from "./contactflowattribute"

export const defaultProps = {
  positionX: 800,
  positionY: 800,
  maxDigits: 3
}

export const propTypes = {
}

export const generateTextFromOptions = question => {
  let text = `${question.text} <break time="1s" />`
  return `<speak>${text}</speak>`
}


export const ContactFlowStore = ({
  question,
  ownUUID,
  errorUUID,
  transitionUUIDs,
  modules,
  positionX,
  positionY,
  dispatch,
  addKey,
  //useDynamic = defaultProps.useDynamic,
  maxDigits = defaultProps.maxDigits
}) => {
  let key = `${question.category}_${question.id}`
  dispatch(addKey(key))

  const blyatUUID = uuid()

  let contactFlowAttribute = ContactFlowAttribute({
    ownUUID: blyatUUID,
    errorUUID: errorUUID,
    key: key,
    value: "Stored customer input",
    positionX: positionX + 250,
    positionY: positionY + 0 * 200,
    transitionUUID: transitionUUIDs[0].uuid,
    namespace: "System"
  })
  modules.push(contactFlowAttribute)
  let useFullText = generateTextFromOptions(question)

  const wtf = {
    id: ownUUID,
    type: "StoreUserInput",
    branches: [
      {
        condition: "Success",
        transition: blyatUUID//transitionUUIDs[0].uuid
      },
      {
        condition: "Error",
        transition: errorUUID
      }
    ],
    parameters: [
      {
        name: "Text",
        value: useFullText,
        namespace: null
      },
      {
        name: "TextToSpeechType",
        value: "ssml"
      },
      {
        name: "CustomerInputType",
        value: "Custom"
      },
      {
        name: "Timeout",
        value: "5"
      },
      {
        name: "MaxDigits",
        value: maxDigits
      },
      {
        name: "EncryptEntry",
        value: false
      },
      {
        name: "DisableCancel",
        value: false
      }
    ],
    metadata: {
      position: {
        x: positionX,
        y: positionY
      },
      useDynamic: false,
      useDynamicForEncryptionKeys: true,
      useDynamicForTerminatorDigits: false,
      countryCodePrefix: "+1"
    }
  }
  return wtf
}

ContactFlowStore.propTypes = propTypes
ContactFlowStore.defaultProps = defaultProps

export default ContactFlowStore