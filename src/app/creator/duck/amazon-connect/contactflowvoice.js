import PropTypes from "prop-types"


export const defaultProps = {
  voiceType: "Vicki",
  positionX: 420,
  positionY: 20
}

export const propTypes = {
  ownUUID: PropTypes.string.isRequired,
  transitionUUID: PropTypes.string.isRequired,
  errorUUID: PropTypes.string.isRequired,
  voiceType: PropTypes.string,
  positionX: PropTypes.number,
  positionY: PropTypes.number
}

export const ContactFlowVoice = ({
    ownUUID, transitionUUID, errorUUID,
    voiceType = defaultProps.voiceType,
    positionX = defaultProps.positionX,
    positionY = defaultProps.positionY
  }) => {


  return {
    id: ownUUID,
    type: "SetVoice",
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
        name: "GlobalVoice",
        value: voiceType
      }
    ],
    metadata: {
      position: {
        x: positionX,
        y: positionY
      }
    }
  }
}

ContactFlowVoice.propTypes = propTypes
ContactFlowVoice.defaultProps = defaultProps

export default ContactFlowVoice