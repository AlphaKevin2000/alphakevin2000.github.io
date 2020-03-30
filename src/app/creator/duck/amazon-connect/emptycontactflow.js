import PropTypes from "prop-types"

export const defaultProps = {
  version: "1",
  positionX: 20,
  positionY: 50,
  description: "generated ContactFlow",
  snapToGrid: true,
}

export const propTypes = {
  startUUID: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  version: PropTypes.string,
  positionX: PropTypes.number,
  positionY: PropTypes.number,
  description: PropTypes.string,
  snapToGrid: PropTypes.bool
}


export const EmptyContactFlow = ({
  startUUID, name,
  version = defaultProps.version,
  positionX = defaultProps.positionX,
  positionY = defaultProps.positionY,
  description = defaultProps.description,
  snapToGrid = defaultProps.snapToGrid
  }) => {

  return {
    modules: [],
    version: version,
    type: "contactFlow",
    start: startUUID,
    metadata: {
      entryPointPosition: {
        x: positionX,
        y: positionY
      },
      snapToGrid: snapToGrid,
      name: name,
      description: description,
      type: "contactFlow",
      status: "saved"
    }
  }
}

EmptyContactFlow.propTypes = propTypes
EmptyContactFlow.defaultProps = defaultProps

export default EmptyContactFlow

