//import fetch from "cross-fetch"
import { uuid } from "uuidv4"
import fileDownload from "js-file-download"
import JSZip from "jszip"
import {
  setQuestionnaireStrings,
  setQuestionnaireOrder,
  setLanguage,
  setCreatedJSON,
  setCreatedAmazonConnectConfig,
  setAmazonConnectData,
  addContactFlow,
  addUUID,
  addKey
} from "./actions"

import { QUESTIONNAIRE_ORDER } from "./questionnaire_order"
import { QUESTIONNAIRE } from "./questionnaire_strings"
import connectTemplate from "./amzn_connect_template"

// TODO: implement a real fetch from  https://covapp.charite.de/
/* export const fetchData = () => {
    return dispatch => {
    (async () => {
      try {
        const res = await fetch(url);
        
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        
        const user = await res.text();
        console.log(res)
        console.log(url)
        console.log(user);
      } catch (err) {
        console.error(err);
      }
    })()
  }
} */


export const fetchDataMock = url => {
  return dispatch => {
    if (url === 'stringMap') {
      dispatch(setQuestionnaireStrings(QUESTIONNAIRE))
    } else {
      dispatch(setQuestionnaireOrder(QUESTIONNAIRE_ORDER))
    }
  }
}

export const handleLanguageChange = language => {
  return dispatch => {
    dispatch(setLanguage(language))
  }
}

export const createRadioQuestion = (question, strings) => {
  let options = question.options.map(option => strings[option])
  return Object.assign({}, question, {
    id: question.id,
    text: strings[question.text],
    options: options,
    nextQuestionMap: question.nextQuestionMap,
    comment: strings[question.comment]
  })
}

export const createDateQuestion = (question, strings) => {
  return Object.assign({}, question, {
    id: question.id,
    text: strings[question.text]
  })
}

export const createJSON = () => {
  return (dispatch, getState) => {
    const state = getState()
    const { order, stringMap, language } = state.creator
    const strings = stringMap[language]
    const data = order.map(question => {

      if (question.inputType === 'date') {
        return createDateQuestion(question, strings)
      } else {
        return createRadioQuestion(question, strings)
      }
    })
    dispatch(setCreatedJSON(data))
  }
}

export const downloadJSON = jsonMap => {
  const zip = new JSZip();
 

  Object.keys(jsonMap).forEach((key, x) => {
      zip.file(`${key}.json`, JSON.stringify(jsonMap[key], null, 4))
      //fileDownload(JSON.stringify(jsonMap[key], null, 4), `${key}.json`)

  })
  zip.generateAsync({type:"blob"}).then(function(content) {
    // see FileSaver.js
    fileDownload(content, "example.zip");
  });
  
  return {type: ''}
}

export const createEmptyContactFlow = obj => {
  const { startUUID, name } = obj
  return {
    modules: [],
    version: "1",
    type: "contactFlow",
    start: startUUID,
    metadata: {
      entryPointPosition: {
        x: 20,
        y: 50
      },
      snapToGrid: true,
      name: name,
      description: "generated ContactFlow",
      type: "contactFlow",
      status: "saved"
    }
  }
}

export const createContactFlowError = obj => {

  const { ownUUID, transitionUUID } = obj

  return {
    id: ownUUID,
    type: "PlayPrompt",
    branches: [
      {
        condition: "Success",
        transition: transitionUUID
      }
    ],
    parameters: [
      {
        name: "Text",
        value: "Irgendetwas ist schief gelaufen. Es tut uns Leid. Bitte versuchen Sie es später noch einmal.",
        namespace: null
      },
      {
        name: "TextToSpeechType",
        value: "text"
      }
    ],
    metadata: {
      position: {
        x: 220,
        y: 420
      },
      useDynamic: false
    }
  }
}

export const createContactFlowEnd = id => {

  return {
    id: id,
    type: "Disconnect",
    branches: [],
    parameters: [],
    metadata: {
      position: {
        x: 20,
        y: 220
      }
    }
  }
}

export const createContactFlowTransfer = obj => {
  const { ownUUID, errorUUID, resourceName } = obj
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
        value: "arn:aws:connect:eu-west-2:260148551992:instance/acfcd22b-ea7c-4be1-bf41-a109717c3bcd/contact-flow/2a00909d-71ef-4410-9e3a-2ddbf4ad09ad",
        resourceName: resourceName
      }
    ],
    metadata: {
      position: {
        x: 20,
        y: 600
      },
      useDynamic: false,
      ContactFlow: {
        id: "arn:aws:connect:eu-west-2:260148551992:instance/acfcd22b-ea7c-4be1-bf41-a109717c3bcd/contact-flow/2a00909d-71ef-4410-9e3a-2ddbf4ad09ad",
        text: resourceName
      }
    },
    target: "Flow"
  }
}

export const createContactFlowLoggingBehavior = obj => {

  const { ownUUID, transitionUUID, errorUUID } = obj

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
        x: 220,
        y: 20
      }
    }
  }
}

export const createContactFlowVoice = obj => {

  const { ownUUID, transitionUUID, errorUUID } = obj
  //const transitionUUID = uuid()

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
        value: "Vicki"
      }
    ],
    metadata: {
      position: {
        x: 420,
        y: 20
      }
    }
  }
}

export const createContactFlowGreeting = obj => {

  const { ownUUID, transitionUUID, errorUUID, text } = obj
  //const transitionUUID = uuid()

  const textX = text === undefined ? "lorem ipsum" : text

  return {
    id: ownUUID,
    type: "PlayPrompt",
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
        name: "Text",
        value: textX,
        namespace: null
      },
      {
        name: "TextToSpeechType",
        value: "text"
      }
    ],
    metadata: {
      position: {
        x: 620,
        y: 20
      },
      useDynamic: false
    }
  }
}

export const createContactFlowUserInput = obj => {
  
  const { question, repeatUUID, errorUUID, transitionUUID, uuidMap, optionsUUIDMap, modules, x, y, dispatch } = obj
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

      let contactFlowAttribute = createContactFlowAttribute({
        ownUUID: optionsUUIDMap[i],
        errorUUID: errorUUID,
        key: key,
        value: i,
        position: {x: x + 250, y: y + i * 200},
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
    id: obj.ownUUID,
    type: "GetUserInput",
    branches: branches,
    parameters: [
      {
        name: "Text",
        value: obj.question.text,
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
      position: obj.position,
      conditionMetadata: conditionMetadata,
      useDynamic: false
    },
    target: "Digits"
  }
}

export const createContactFlowRepeat = obj => {
  const { ownUUID, transitionUUID, position } = obj
  return {
    id: ownUUID,
    type: "PlayPrompt",
    branches: [
      {
        condition: "Success",
        transition: transitionUUID
      }
    ],
    parameters: [
      {
        name: "Text",
        value: "Die Frage wird nun wiederholt.",
        namespace: null
      },
      {
        name: "TextToSpeechType",
        value: "text"
      }
    ],
    metadata: {
      position: position,
      useDynamic: false
    }
  }
}

export const createContactFlowAttribute = obj => {
  const { ownUUID, errorUUID, value, key, position, transitionUUID } = obj

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
        namespace: null
      }
    ],
    metadata: {
      position: position
    }
  }
}

export const createContactFlowInvokeExternal = obj => {

  const { ownUUID, transitionUUID, errorUUID, lambdaKeys } = obj

  console.log({lambdaKeys})
  alert("")

  let dynamicParameters = []
  let dynamicMetadata = {}

  lambdaKeys.lambdaKeys.forEach((key, i) => {
    let dynamicParamter = {
      name: "Parameter",
      key: key,
      value: `$.Attributes.${key}`,
      namespace: null
    }
    let dynamicMetadata = {[key]: false}
    dynamicParameters.push(dynamicParamter)
    dynamicMetadata[key] = false
  })

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
        value: "arn:aws:lambda:eu-west-2:260148551992:function:determineWordsForCovApp",
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
        x: 337,
        y: 35
      },
      dynamicMetadata: dynamicMetadata,
      useDynamic: false
    },
    target: "Lambda"
  }
}

export const createContactFlow = () => {
  return (dispatch, getState) => {
    const state = getState()
    //const questions = [ state.creator.chariteData[0]]
    const questions = state.creator.chariteData
    
    const questionIDList = []
    questions.forEach(question => {
      questionIDList.push(question.id)
    })

    const questionIDSet = new Set(questionIDList)
    const uuidMap = {}

    // Set sadly has no map method :(
    questionIDSet.forEach(id => {
      uuidMap[id] =  uuid()
    })

    questions.forEach((question, i) => {

      const contactFlowName = `generated_charite_data_${i}`

      const endUUID = uuid()
      const repeatUUID = uuid()
      const errorUUID = uuid()
      const transferUUID = uuid()

      const x = 820
      const y = 20

      const contactFlow = createEmptyContactFlow({
        name: contactFlowName,
        startUUID: uuidMap[question.id]
      })
      const modules = []

      const contactFlowEnd = createContactFlowEnd(endUUID)
      modules.push(contactFlowEnd)

      const contactFlowRepeat = createContactFlowRepeat({
        ownUUID: repeatUUID,
        transitionUUID: uuidMap[question.id],
        position: {x: x, y: y + 200}
      })
      modules.push(contactFlowRepeat)

      const contactFlowError = createContactFlowError({
        ownUUID: errorUUID,
        transitionUUID: endUUID
      })
      modules.push(contactFlowError)

      const contactFlowTransfer = createContactFlowTransfer({
        ownUUID: transferUUID,
        errorUUID: errorUUID,
        resourceName: `generated_charite_data_${i+1}`
      })
      modules.push(contactFlowTransfer)

      let optionsUUIDMap = {}

      if (question.hasOwnProperty("options")) {
        console.log({question})
        question.options.forEach((option,i) => {
          optionsUUIDMap[i] = uuid()
        })
      } else {
        optionsUUIDMap[0] = uuid()
      }

      console.log({optionsUUIDMap})

      const contactFlowUserInput = createContactFlowUserInput({
        ownUUID: uuidMap[question.id],
        errorUUID: errorUUID,
        repeatUUID: repeatUUID,
        position: {x: x, y: y},
        question: question,
        transitionUUID: transferUUID,
        uuidMap: uuidMap,
        optionsUUIDMap: optionsUUIDMap,
        modules: modules,
        x: x,
        y: y,
        dispatch: dispatch
      })
      modules.push(contactFlowUserInput)

      contactFlow.modules = modules
      dispatch(setAmazonConnectData({[contactFlowName]: contactFlow}))
    })
    // TODO: add static start and end

    const loggingUUUID = uuid()
    const startErrorUUID = uuid()
    const startEndUUID = uuid()
    const startTransferUUID = uuid()
    const voiceUUID = uuid()
    const greetingUUID = uuid()

    const staticStart = createEmptyContactFlow({
      startUUID: loggingUUUID,
      name: "generated_charite_data_start"
    })
    const startModules = []

    const startError = createContactFlowError({
      ownUUID: startErrorUUID,
      transitionUUID: startEndUUID
    })
    startModules.push(startError)

    const startEnd = createContactFlowEnd(startEndUUID)
    startModules.push(startEnd)

    const startTransfer = createContactFlowTransfer({
      ownUUID: startTransferUUID,
      errorUUID: startErrorUUID,
      resourceName: "generated_charite_data_0"
    })
    startModules.push(startTransfer)

    const startLogging = createContactFlowLoggingBehavior({
      ownUUID: loggingUUUID,
      transitionUUID: voiceUUID,
      errorUUID: startErrorUUID
    })
    startModules.push(startLogging)

    const startVoice = createContactFlowVoice({
      ownUUID: voiceUUID,
      transitionUUID: greetingUUID,
      errorUUID: startErrorUUID
    })
    startModules.push(startVoice)

    const startGreeting = createContactFlowGreeting({
      ownUUID: greetingUUID,
      transitionUUID: startTransferUUID,
      errorUUID: startErrorUUID
    })
    startModules.push(startGreeting)

    staticStart.modules = startModules

    dispatch(setAmazonConnectData({"generated_charite_data_start": staticStart}))

    const finishUUID = uuid()
    const endErrorUUID = uuid()
    const lambdaUUID = uuid()
    const recomUUID = uuid()
    const recomSpeechUUID = uuid()
    const endModules = []

    const staticEnd = createEmptyContactFlow({
      startUUID: lambdaUUID,
      name: "generated_charite_data_29"
    })

    const endError = createContactFlowError({
      ownUUID: endErrorUUID,
      transitionUUID: finishUUID
    })
    endModules.push(endError)

    const finishLine = createContactFlowEnd(finishUUID)
    endModules.push(finishLine)

    const finalState = getState()
    const lambdaKeys = finalState.creator.lambdaKeys

    const lambdaCall = createContactFlowInvokeExternal({
      ownUUID: lambdaUUID,
      errorUUID: endErrorUUID,
      lambdaKeys: lambdaKeys,
      transitionUUID: recomUUID
    })
    endModules.push(lambdaCall)

    let position = {x: 400, y: 400}

    const recomAttr = createContactFlowAttribute({
      ownUUID: recomUUID,
      errorUUID: endErrorUUID,
      value: "$.External.recommendation",
      key: "recommendation",
      position: position,
      transitionUUID: recomSpeechUUID
    })
    endModules.push(recomAttr)

    const recomVoice = createContactFlowGreeting({
      ownUUID: recomSpeechUUID,
      transitionUUID: finishUUID,
      errorUUID: endErrorUUID,
      text: "$.External.word1 und $.External.word2"
    })
    endModules.push(recomVoice)

    staticEnd.modules = endModules 
    dispatch(setAmazonConnectData({"generated_charite_data_29": staticEnd}))
  }
}