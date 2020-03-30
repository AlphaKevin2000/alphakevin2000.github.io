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
  transitionUUID: PropTypes.string.isRequired,
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
    transitionUUID,
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

    dynamicBranches = question.options.map((option,i) => {
      let conditionMetadataUUID = uuid()//optionsUUIDMap[i]

      const conditionMetadataObj = {
        id: conditionMetadataUUID,
        value: i.toString()
      }
      conditionMetadata.push(conditionMetadataObj)


      let fooUUID
      if(question.hasOwnProperty("nextQuestionMap") && question.nextQuestionMap != undefined) {
        console.log(question.nextQuestionMap)
        fooUUID = transitionUUID //uuidMap[question.nextQuestionMap[i]]
      }  else {
        fooUUID = transitionUUID 
      }
      
      let key = `${question.category}_${question.id}`
      dispatch(addKey(key))

      let contactFlowAttribute = ContactFlowAttribute({
        ownUUID: optionsUUIDMap[i],
        errorUUID: errorUUID,
        key: key,
        value: i,
        positionX: positionX + 250,
        postionY: positionY + i * 200,
        transitionUUID: fooUUID
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
    //let transitionUUID = uuid()
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
      transition: transitionUUID
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