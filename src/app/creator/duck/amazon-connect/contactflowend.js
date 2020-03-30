import PropTypes from "prop-types"

export const defaultProps = {
  positionX: 20,
  positionY: 220
}

export const propTypes = {
  ownUUID: PropTypes.string.isRequired,
  positionX: PropTypes.number,
  positionY: PropTypes.number
}

export const ContactFlowEnd = ({
    ownUUID,
    positionX = defaultProps.positionX,
    positionY = defaultProps.positionY
  }) => {

  return {
    id: ownUUID,
    type: "Disconnect",
    branches: [],
    parameters: [],
    metadata: {
      position: {
        x: positionX,
        y: positionY
      }
    }
  }
}

ContactFlowEnd.propTypes = propTypes
ContactFlowEnd.defaultProps = defaultProps

export default ContactFlowEnd