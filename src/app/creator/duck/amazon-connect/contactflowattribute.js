import PropTypes from "prop-types"


export const defaultProps = {
  namespace: null
}

export const propTypes = {
  ownUUID: PropTypes.string.isRequired,
  errorUUID: PropTypes.string.isRequired,
  transitionUUID: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  key: PropTypes.string.isRequired,
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired
}


export const ContactFlowAttribute = ({
    ownUUID, errorUUID, transitionUUID, value, key, positionX, positionY,
    namespace = defaultProps.namespace
  }) => {  

  return {
    id: ownUUID,
    type: "SetAttributes",
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
        name: "Attribute",
        value: value,
        key: key,
        namespace: namespace
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

ContactFlowAttribute.propTypes = propTypes
ContactFlowAttribute.defaultProps = defaultProps

export default ContactFlowAttribute