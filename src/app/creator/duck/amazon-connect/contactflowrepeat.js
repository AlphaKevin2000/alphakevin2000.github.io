import PropTypes from "prop-types"


export const defaultProps = {
  text: "Die Frage wird nun wiederholt.",
  useDynamic: false
}

export const propTypes = {
  ownUUID: PropTypes.string.isRequired,
  transitionUUID: PropTypes.string.isRequired,
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired,
  text: PropTypes.string,
  useDynamic: PropTypes.bool
}

export const ContactFlowRepeat = ({
    ownUUID, transitionUUID, positionX, positionY,
    text = defaultProps.text,
    useDynamic = defaultProps.useDynamic
  }) => {
  return {
    id: ownUUID,
    type: "PlayPrompt",
    branches: [
      {
        condition: "Success",
        transition: transitionUUID
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
        value: "text"
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

ContactFlowRepeat.propTypes = propTypes
ContactFlowRepeat.defaultProps = defaultProps

export default ContactFlowRepeat