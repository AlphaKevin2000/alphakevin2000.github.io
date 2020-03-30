import PropTypes from "prop-types"


export const defaultProps = {
  positionX: 220,
  positionY: 20
}

export const propTypes = {
  ownUUID: PropTypes.string.isRequired,
  transitionUUID: PropTypes.string.isRequired,
  errorUUID: PropTypes.string.isRequired,
}

export const ContactFlowLogging = ({
    ownUUID, transitionUUID, errorUUID,
    positionX = defaultProps.positionX,
    positionY = defaultProps.positionY
  }) => {

  return {
    id: ownUUID,
    type: "SetLoggingBehavior",
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
        name: "LoggingBehavior",
        value: "Enable"
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

ContactFlowLogging.propTypes = propTypes
ContactFlowLogging.defaultProps = defaultProps

export default ContactFlowLogging