//import fetch from "cross-fetch"
import { uuid } from "uuidv4"
import fileDownload from "js-file-download"
import {
  setQuestionnaireStrings,
  setQuestionnaireOrder,
  setLanguage,
  setCreatedJSON,
  setCreatedAmazonConnectConfig,
  addContactFlow,
  addUUID
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

export const createRadionQuestion = (question, strings) => {
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
        return createRadionQuestion(question, strings)
      }
    })
    dispatch(setCreatedJSON(data))
  }
}

export const downloadJSON = json => {
  fileDownload(JSON.stringify(json, null, 4), 'generated_contact_flow.json')
  return {type: ''}
}

export const createEmptyContactFlow = () => {
  const startUUID = uuid()
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
      name: "charite_generated_contactflow",
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
        x: 20,
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

export const createContactFlowLoggingBehavior = (id, transitionUUIDError) => {

  const transitionUUID = uuid()

  return {
    id: id,
    type: "SetLoggingBehavior",
    branches: [
      {
        condition: "Success",
        transition: transitionUUID
      },
      {
        condition: "Error",
        transition: transitionUUIDError
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

  const { ownUUID, transitionUUID, transitionUUIDError } = obj
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
        transition: transitionUUIDError
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

  const { ownUUID, transitionUUID, transitionUUIDError } = obj
  //const transitionUUID = uuid()

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
        transition: transitionUUIDError
      }
    ],
    parameters: [
      {
        name: "Text",
        value: "Dieser Telefonservice ist eine von der Charité in Zusammenarbeit mit einem Team von freiwilligen des Heckatons der Bundesregierung entwickelte Dienstleistung, mit der Sie innerhalb weniger Minuten einen Fragenkatalog beantworten und daraus spezifische Handlungsempfehlungen erhalten. Sie erhalten nach Beantwortung der Fragen konkrete Handlungsempfehlungen. Ziel ist es, die Patientenströme in Krankenhäusern und Untersuchungsstellen zu optimieren.\n\nSie erhalten am Ende zwei Wörter, die Sie sich notieren. Durch Nennung dieser beiden Wörter können Praxen und Kliniken ihre individuelle Zusammenfassung der Antworten abfragen. Sie können frei entscheiden, wem Sie diese zwei Wörter anvertrauen.\n\nNehmen Sie sich etwa 10 Minuten Zeit.\n\nBitte beachten Sie, dass die Nutzung dieser Dienstleistung keine ärztliche Behandlung ersetzt und keine diagnostische Leistung erbringt. Wenn Sie sich daher aktuell schwer krank fühlen, suchen Sie bitte umgehend einen Arzt/Ärztin oder medizinische Hilfe auf.\n\nBeginnen wir nun mit den Fragen:",
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
  
  const conditionMetadata = []

  const staticBranches = [
    {
      condition: "Timeout",
      transition: obj.repeatUUID
    },
    {
      condition: "NoMatch",
      transition: obj.repeatUUID
    },
    {
      condition: "Error",
      transition: obj.errorUUID
    }
  ]

  let dynamicBranches

  if (obj.question.hasOwnProperty("options")) {
    dynamicBranches = obj.question.options.map((option,i) => {
      let val = i + 1
      let transitionUUID = uuid()
      let conditionMetadataUUID = uuid()
  
      const conditionMetadataObj = {
        id: conditionMetadataUUID,
        value: val.toString()
      }
  
      conditionMetadata.push(conditionMetadataObj)
  
      return {
        condition: "Evaluate",
        conditionType: "Equals",
        conditionValue: val.toString(),
        transition: transitionUUID
      }
    })
  } else {
    let transitionUUID = uuid()
    let conditionMetadataUUID = uuid()
  
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

    /* ownUUID: obj.transition,
    errorUUID: transitionUUIDError,
    key: key,
    value: val.toString(),
    position: position,
    transitionUUID: transitionUUID */


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

export const createContactFlow = () => {

  // TODO: use 0 index instead of 1

  return (dispatch, getState) => {

    const transitionUUIDError = uuid()
    const transitionUUIDEnd = uuid()

    let state = getState()
    const questions = state.creator.chariteData
    let uuidList = state.creator.uuidList

    // initialize new contact flow. fill contactFlow.modules
    const contactFlow = createEmptyContactFlow()
    dispatch(setCreatedAmazonConnectConfig(contactFlow))


    const contactFlowError = createContactFlowError({ownUUID: transitionUUIDError, transitionUUID: transitionUUIDEnd})
    dispatch(addContactFlow(contactFlowError))
    const contactFlowEnd = createContactFlowEnd(transitionUUIDEnd)
    dispatch(addContactFlow(contactFlowEnd))
    const contactFlowLoggingBehavior = createContactFlowLoggingBehavior(contactFlow.start, transitionUUIDError)
    dispatch(addContactFlow(contactFlowLoggingBehavior))

    //transitionUUID
    uuidList.push(uuid())

    const contactFlowVoice = createContactFlowVoice({
      ownUUID: contactFlowLoggingBehavior.branches[0].transition,
      transitionUUIDError: transitionUUIDError,
      transitionUUID: uuidList.slice(-1)[0]
    })
    dispatch(addContactFlow(contactFlowVoice))

    //transitionUUID
    uuidList.push(uuid())

    const contactFlowGreeting = createContactFlowGreeting({
      ownUUID: contactFlowVoice.branches[0].transition,
      transitionUUIDError: transitionUUIDError,
      transitionUUID: uuidList.slice(-1)[0]
    })
    dispatch(addContactFlow(contactFlowGreeting))

    dispatch(addUUID(contactFlowGreeting.branches[0].transition))

    let x = 820
    let y = 20

    const myquestions = questions.slice(0,1) // use 10 when everyhting works, maybe even higher //[questions[1]]
    const finalQuestion = myquestions.slice(-1)[0]
    // remove filter!! .filter(q => !q.hasOwnProperty("nextQuestionMap"))

    //let endUUID = uuid()

    myquestions.forEach((question, i) => {
      //console.log(finalQuestion === question)
      //state = getState()
      //uuidList = state.creator.uuidList
      uuidList = uuidList.slice(-1)
      let position = {x: x, y: y + 200}
      let repeatUUID = uuid()
      let ownUUID = uuidList[i]
      let contactFlowRepeat = createContactFlowRepeat({
        ownUUID: repeatUUID,
        transitionUUID: ownUUID,
        position: position
      })

      position = {x: x, y: y}
      

      let stuff = {
        ownUUID: ownUUID,//uuidList[i],
        errorUUID: transitionUUIDError,
        repeatUUID: repeatUUID,
        position: position,
        question: question
      }
      
      dispatch(addContactFlow(contactFlowRepeat))
      let contactFlowUserInput = createContactFlowUserInput(stuff)

      let transitionUUID = finalQuestion === question ? transitionUUIDEnd : uuid() 

      contactFlowUserInput.branches.filter(branch => branch.condition == 'Evaluate').forEach((obj, j) => {

        let position = {x: x + 200, y: y + j * 200}

        const val = j + 1
        const key = `${question.category}_${question.id}`
        let stuff = {
          ownUUID: obj.transition,
          errorUUID: transitionUUIDError,
          key: key,
          value: val.toString(),
          position: position,
          transitionUUID: transitionUUID
        }

        let contactFlowAttribute = createContactFlowAttribute(stuff)
        dispatch(addContactFlow(contactFlowAttribute))
        
      })
      uuidList.push(contactFlowUserInput.branches[0].transition)
      //dispatch(addUUID(contactFlowUserInput.branches[0].transition))
      dispatch(addContactFlow(contactFlowUserInput))
      x = x + 400
    })
  }
}