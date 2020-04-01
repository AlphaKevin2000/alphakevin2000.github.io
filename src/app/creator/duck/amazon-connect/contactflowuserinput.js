import PropTypes from "prop-types"
import { uuid } from "uuidv4"
import { ContactFlowAttribute }  from "./contactflowattribute"


export const defaultProps = {
  useDynamic: false
}

export const propTypes = {
  question: PropTypes.object.isRequired,
  ownUUID: PropTypes.string.isRequired,
  repeatUUID: PropTypes.string.isRequired,
  errorUUID: PropTypes.string.isRequired,
  transitionUUIDs: PropTypes.arrayOf(PropTypes.object).isRequired,
  optionsUUIDMap: PropTypes.arrayOf(PropTypes.string).isRequired,
  modules: PropTypes.arrayOf(PropTypes.object).isRequired,
  positionX: PropTypes.number.isRequired,
  positionY: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  addKey: PropTypes.func.isRequired,
  useDynamic: PropTypes.bool
}

export const ContactFlowUserInput = ({
    question,
    ownUUID,
    repeatUUID,
    errorUUID,
    transitionUUIDs,
    optionsUUIDMap,
    modules,
    positionX,
    positionY,
    dispatch,
    addKey,
    useDynamic = defaultProps.useDynamic
  }) => {
  
  const conditionMetadata = []

  const staticBranches = [
    {
      condition: "Timeout",
      transition: repeatUUID
    },
    {
      condition: "NoMatch",
      transition: repeatUUID
    },
    {
      condition: "Error",
      transition: errorUUID
    }
  ]

  /*  each dynamic branch needs a SetAttributes */
  let dynamicBranches

  if (question.hasOwnProperty("options")) {
    // TODO: add each option to the question text
    dynamicBranches = question.options.map((option,i) => {
      let conditionMetadataUUID = uuid()

      const conditionMetadataObj = {
        id: conditionMetadataUUID,
        value: i.toString()
      }
      conditionMetadata.push(conditionMetadataObj)
      
      let key = `${question.category}_${question.id}`
      dispatch(addKey(key))

      let contactFlowAttribute = ContactFlowAttribute({
        ownUUID: optionsUUIDMap[i],
        errorUUID: errorUUID,
        key: key,
        value: i,
        positionX: positionX + 250,
        positionY: positionY + i * 200,
        transitionUUID: transitionUUIDs[i].uuid
      })
      modules.push(contactFlowAttribute)
  
      return {
        condition: "Evaluate",
        conditionType: "Equals",
        conditionValue: i.toString(),
        transition: optionsUUIDMap[i]
      }
    })
  } else {
    // TODO: make this work properly
    let conditionMetadataUUID = optionsUUIDMap[0]
  
    const conditionMetadataObj = {
        id: conditionMetadataUUID,
        value: "1"
    }
  
    conditionMetadata.push(conditionMetadataObj)

    dynamicBranches = [{
      condition: "Evaluate",
      conditionType: "Equals",
      conditionValue: "1",
      transition: transitionUUIDs[0].uuid
    }]

  }

  const branches = [...dynamicBranches, ...staticBranches]

  return {
    id: ownUUID,
    type: "GetUserInput",
    branches: branches,
    parameters: [
      {
        name: "Text",
        value: question.text,
        namespace: null
      },
      {
        name: "TextToSpeechType",
        value: "text"
      },
      {
        name: "Timeout",
        value: "5"
      },
      {
        name: "MaxDigits",
        value: "1"
      }
    ],
    metadata: {
      position: {
        x: positionX,
        y: positionY
      },
      conditionMetadata: conditionMetadata,
      useDynamic: useDynamic
    },
    target: "Digits"
  }
}

ContactFlowUserInput.propTypes = propTypes
ContactFlowUserInput.defaultProps = defaultProps

export default ContactFlowUserInput