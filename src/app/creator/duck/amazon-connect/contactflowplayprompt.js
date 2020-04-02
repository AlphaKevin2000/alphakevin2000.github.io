import PropTypes from "prop-types"


export const defaultProps = {
  positionX: 620,
  positionY: 20,
  useDynamic: false,
  textToSpechType: "ssml"
}

export const propTypes = {
  ownUUID: PropTypes.string.isRequired,
  transitionUUID: PropTypes.string.isRequired,
  errorUUID: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  positionX: PropTypes.string,
  positionY: PropTypes.string,
  useDynamic: PropTypes.bool
}

export const ContactFlowPlayPrompt = ({
    ownUUID, transitionUUID, errorUUID, text,
    positionX = defaultProps.positionX,
    positionY = defaultProps.positionY,
    useDynamic = defaultProps.useDynamic,
    textToSpechType = defaultProps.textToSpechType
  }) => {

  return {
    id: ownUUID,
    type: "PlayPrompt",
    branches: [
      {
        condition: "Success",
        transition: transitionUUID
      },
      {
        condition: "Error",
        transition: errorUUID
      }
    ],
    parameters: [
      {
        name: "Text",
        value: text,
        namespace: null
      },
      {
        name: "TextToSpeechType",
        value: textToSpechType
      }
    ],
    metadata: {
      position: {
        x: positionX,
        y: positionY
      },
      useDynamic: useDynamic
    }
  }
}

ContactFlowPlayPrompt.propTypes = propTypes
ContactFlowPlayPrompt.defaultProps = defaultProps

export default ContactFlowPlayPrompt