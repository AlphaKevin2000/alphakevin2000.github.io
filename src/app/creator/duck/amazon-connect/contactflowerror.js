import PropTypes from "prop-types"

export const defaultProps = {
  positionX: 220,
  positionY: 420,
  errorText: "Irgendetwas ist schief gelaufen. Es tut uns Leid. Bitte versuchen Sie es später noch einmal.",
  useDynamic: false
}

export const propTypes = {
  startUUID: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  positionX: PropTypes.number,
  positionY: PropTypes.number,
  useDynamic: PropTypes.bool
}

export const ContactFlowError = ({
    ownUUID, transitionUUID,
    errorText = defaultProps.errorText,
    positionX = defaultProps.positionX,
    positionY = defaultProps.positionY,
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
        value: errorText,
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

ContactFlowError.propTypes = propTypes
ContactFlowError.defaultProps = defaultProps

export default ContactFlowError