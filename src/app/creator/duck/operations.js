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

export const createContactFlowError = (id, transitionUUIDEnd) => {
  return {
    id: id,
    type: "PlayPrompt",
    branches: [
      {
        condition: "Success",
        transition: transitionUUIDEnd
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
        x: 513,
        y: 681
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
        x: 1102,
        y: 735
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
        x: 120,
        y: 20
      }
    }
  }
}

export const createContactFlowVoice = (id, transitionUUIDError) => {

  const transitionUUID = uuid()

  return {
    id: id,
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
        x: 320,
        y: 20
      }
    }
  }
}

export const createContactFlowGreeting = (id, transitionUUIDError) => {

  const transitionUUID = uuid()

  return {
    id: id,
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
        x: 520,
        y: 20
      },
      useDynamic: false
    }
  }
}

export const createContactFlowUserInput = obj => {

  /*
    {
      ownUUID,
      errorUUID,
      repeatUUID,
      position,
      question
    }

  */
  
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

  /* const dynamicBranches = obj.question.options.map((option,i) => {
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
  }) */

  const branches = [...staticBranches, ...dynamicBranches]

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

export const createContactFlowRepeat = (id, transitionUUID, position) => {
  return {
    id: id,
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
  const { ownUUID, errorUUID, value, key, position } = obj
  const transitionUUID = uuid()
  
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
  return (dispatch, getState) => {
    const transitionUUIDError = uuid()
    const transitionUUIDEnd = uuid()

    let state = getState()
    const questions = state.creator.chariteData
    let uuidList = state.creator.uuidList

    const contactFlow = createEmptyContactFlow()
    dispatch(setCreatedAmazonConnectConfig(contactFlow))

    const contactFlowError = createContactFlowError(transitionUUIDError, transitionUUIDEnd)
    dispatch(addContactFlow(contactFlowError))

    const contactFlowLoggingBehavior = createContactFlowLoggingBehavior(contactFlow.start, transitionUUIDError)
    dispatch(addContactFlow(contactFlowLoggingBehavior))

    const contactFlowVoice = createContactFlowVoice(contactFlowLoggingBehavior.branches[0].transition, transitionUUIDError)
    dispatch(addContactFlow(contactFlowVoice))

    const contactFlowGreeting = createContactFlowGreeting(contactFlowVoice.branches[0].transition, transitionUUIDError)
    dispatch(addContactFlow(contactFlowGreeting))

    dispatch(addUUID(contactFlowGreeting.branches[0].transition))

    let x = 100
    let y = 300

    const myquestions = questions.slice(0,10)//[questions[1]]
    myquestions.forEach((question, i) => {
      state = getState()
      uuidList = state.creator.uuidList
      //console.log(question)
      let position = {x: x, y: y}
      let repeatUUID = uuid()
      let contactFlowRepeat = createContactFlowRepeat(repeatUUID, uuidList[i], position)
      x = x + 200
      y = y + 300
     /*  x = x + 200
        if (i%6 === 0 && i !== 0) {
          y = y + 600
          x = 100
        } */
        position = {x: x, y: y}
      let stuff = {
        ownUUID: uuidList[i],
        errorUUID: transitionUUIDError,
        repeatUUID: repeatUUID,
        position: position,
        question: question
      }
    
      
      dispatch(addContactFlow(contactFlowRepeat))
      let contactFlowUserInput = createContactFlowUserInput(stuff)
      contactFlowUserInput.branches.filter(branch => branch.condition == 'Evaluate').forEach((obj, j) => {
        console.log({obj, question})
        x = x + 200
        if (j%6 === 0 && j !== 0) {
          y = y + 600
          x = 100
        }
        let position = {x: x, y: y}
        const val = j + 1
        const key = `${question.category}_${question.id}`
        let stuff = {
          ownUUID: obj.transition,
          errorUUID: transitionUUIDError,
          key: key,
          value: val.toString(),
          position: position
        }
        let contactFlowAttribute = createContactFlowAttribute(stuff)
        dispatch(addContactFlow(contactFlowAttribute))
        
      })
      dispatch(addUUID(contactFlowUserInput.branches[0].transition))
      dispatch(addContactFlow(contactFlowUserInput))
      x = x + 200
      if (i%6 === 0 && i !== 0) {
        y = y + 600
        x = 100
      }
    })
  }
}