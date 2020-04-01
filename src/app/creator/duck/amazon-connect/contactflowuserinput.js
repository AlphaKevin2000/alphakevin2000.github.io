import PropTypes from "prop-types"
import { uuid } from "uuidv4"
import { ContactFlowAttribute } from "./contactflowattribute"


export const defaultProps = {
  useDynamic: false,
  maxDigits: "1"
}

export const generateTextFromOptions = question => {
  let text = `${question.text} <break time="1s" />`

  question.options.forEach((option, i) => {
    text = text.concat(`Drücken Sie die ${i} für ${option} <break time="1s" />`)
  })
  return `<speak>${text}</speak>`
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
  useDynamic: PropTypes.bool,
  maxDigits: PropTypes.string
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
  useDynamic = defaultProps.useDynamic,
  maxDigits = defaultProps.maxDigits
}) => {

  const conditionMetadata = []

  let staticBranches = [
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
    dynamicBranches = question.options.map((option, i) => {
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
  }
  else {
    // TODO: make this work properly
    //let conditionMetadataUUID = optionsUUIDMap[0]

    /* const conditionMetadataObj = {
        id: conditionMetadataUUID,
        value: "1"
    } */

    //conditionMetadata.push(conditionMetadataObj)

    /*  dynamicBranches = [{
       condition: "Evaluate",
       conditionType: "Equals",
       conditionValue: "1",
       transition: transitionUUIDs[0].uuid
     }] */


    let key = `${question.category}_${question.id}`
    dispatch(addKey(key))

    const blyatUUID = uuid()

    let contactFlowAttribute = ContactFlowAttribute({
      ownUUID: blyatUUID,
      errorUUID: errorUUID,
      key: key,
      value: 0,
      positionX: positionX + 250,
      positionY: positionY + 0 * 200,
      transitionUUID: transitionUUIDs[0].uuid
    })
    modules.push(contactFlowAttribute)


    dynamicBranches = [

    ]
    staticBranches = [
      {
        condition: "Timeout",
        transition: repeatUUID
      },
      {
        condition: "NoMatch",
        transition: blyatUUID
      },
      {
        condition: "Error",
        transition: errorUUID
      }
    ]
  }

  const branches = [...dynamicBranches, ...staticBranches]

  //console.log({question})

  let useFullText = question.hasOwnProperty("options") ? generateTextFromOptions(question) : `<speak>${question.text}</speak>`

  return {
    id: ownUUID,
    type: "GetUserInput",
    branches: branches,
    parameters: [
      {
        name: "Text",
        value: useFullText,
        namespace: null
      },
      {
        name: "TextToSpeechType",
        value: "ssml"
      },
      {
        name: "Timeout",
        value: "5"
      },
      {
        name: "MaxDigits",
        value: maxDigits
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