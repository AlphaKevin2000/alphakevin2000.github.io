import PropTypes from "prop-types"


// TODO: find better name for endPoint, maybe even split it in parts
export const defaultProps = {
  positionX: 20,
  positionY: 600,
  endPoint: "arn:aws:connect:eu-west-2:260148551992:instance/acfcd22b-ea7c-4be1-bf41-a109717c3bcd/contact-flow/2a00909d-71ef-4410-9e3a-2ddbf4ad09ad"
}

export const propTypes = {
  ownUUID: PropTypes.string.isRequired,
  errorUUID: PropTypes.string.isRequired,
  resourceName: PropTypes.string.isRequired,
  positionX: PropTypes.number,
  positionY: PropTypes.number,
  endPoint: PropTypes.string,
  useDynamic: PropTypes.bool
}

export const ContactFlowTransfer = ({
    ownUUID, errorUUID, resourceName,
    positionX = defaultProps.positionX,
    positionY = defaultProps.positionY,
    endPoint = defaultProps.endPoint,
    useDynamic = defaultProps.useDynamic
  }) => {

  return {
    id: ownUUID,
    type: "Transfer",
    branches: [
      {
        condition: "Error",
        transition: errorUUID
      }
    ],
    parameters: [
      {
        name: "ContactFlowId",
        value: endPoint,
        resourceName: resourceName
      }
    ],
    metadata: {
      position: {
        x: positionX,
        y: positionY
      },
      useDynamic: useDynamic,
      ContactFlow: {
        id: endPoint,
        text: resourceName
      }
    },
    target: "Flow"
  }
}

ContactFlowTransfer.propTypes = propTypes
ContactFlowTransfer.defaultProps = defaultProps

export default ContactFlowTransfer