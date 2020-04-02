import PropTypes from "prop-types"


export const defaultProps = {
  positionX: 337,
  positionY: 35,
  endPoint: "arn:aws:lambda:eu-west-2:260148551992:function:determineWordsForCovApp"
}

export const propTypes = {
  ownUUID: PropTypes.string.isRequired,
  transitionUUID: PropTypes.string.isRequired,
  errorUUID: PropTypes.string.isRequired,
  lambdaKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  positionX: PropTypes.number,
  positionY: PropTypes.number,
  endPoint: PropTypes.string
}

export const ContactFlowInvokeExternal = ({
    ownUUID, transitionUUID, errorUUID, lambdaKeys,
    positionX = defaultProps.positionX,
    positionY = defaultProps.positionY,
    endPoint = defaultProps.endPoint
  }) => {

  let dynamicParameters = []
  let dynamicMetadata = {}

  console.log({lambdaKeys})

  lambdaKeys.forEach((key, i) => {
    let dynamicParamter = {
      name: "Parameter",
      key: key,
      value: `$.Attributes.${key}`,
      namespace: null
    }
    //let dynamicMetadata = {[key]: false} woopsie
    dynamicParameters.push(dynamicParamter)
    dynamicMetadata[key] = false
  })

  console.log({dynamicMetadata})

  return {
    id: ownUUID,
    type: "InvokeExternalResource",
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
        name: "FunctionArn",
        value: endPoint,
        namespace: null
      },
      {
        name: "TimeLimit",
        value: "8"
      },
      ...dynamicParameters
    ],
    metadata: {
      position: {
        x: positionX,
        y: positionY
      },
      dynamicMetadata: dynamicMetadata,
      useDynamic: false
    },
    target: "Lambda"
  }
}

ContactFlowInvokeExternal.propTypes = propTypes
ContactFlowInvokeExternal.defaultProps = defaultProps

export default ContactFlowInvokeExternal