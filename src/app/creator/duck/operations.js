//import fetch from "cross-fetch"
import { uuid } from "uuidv4"
import fileDownload from "js-file-download"
import {
  setQuestionnaireStrings,
  setQuestionnaireOrder,
  setLanguage,
  setCreatedJSON,
  setCreatedAmazonConnectConfig
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

  const transitionUUIDTimeout = uuid()
  const transitionUUIDNoMatch = uuid()
  const transitionUUIDError = uuid()

  return {
    id: obj.ownUUID,
    type: "GetUserInput",
    branches: [
      /* {
        condition: "Evaluate",
        conditionType: "Equals",
        conditionValue: "1",
        transition: "dec76ab0-917d-4217-904e-c43dc4a6232a"
      },
      {
        condition: "Evaluate",
        conditionType: "Equals",
        conditionValue: "2",
        transition: "f4a606e7-8f18-4800-a496-b2cba852c930"
      }, */
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
    ],
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
      conditionMetadata: [
        {
          id: "68babdb7-afd5-4174-a431-69654edfe13a",
          value: "1"
        },
        {
          id: "ef0f5486-827f-4c53-9ae4-9da0120e233f",
          value: "2"
        }
      ],
      useDynamic: false
    },
    target: "Digits"
  }
}

export const createContactFlowRepeat = (id, transitionUUID) => {
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
      position: {
        x: 513,
        y: 498
      },
      useDynamic: false
    }
  }
}

export const createContactFlow = questions => {

  const transitionUUIDError = uuid()
  const transitionUUIDEnd = uuid()

  const contactFlow = createEmptyContactFlow()

  const contactFlowEnd = createContactFlowEnd(transitionUUIDEnd)
  contactFlow.modules.push(contactFlowEnd)

  const contactFlowError = createContactFlowError(transitionUUIDError, transitionUUIDEnd)
  contactFlow.modules.push(contactFlowError)

  const contactFlowLoggingBehavior = createContactFlowLoggingBehavior(contactFlow.start, transitionUUIDError)
  contactFlow.modules.push(contactFlowLoggingBehavior)

  const contactFlowVoice = createContactFlowVoice(contactFlowLoggingBehavior.branches[0].transition, transitionUUIDError)
  contactFlow.modules.push(contactFlowVoice)

  const contactFlowGreeting = createContactFlowGreeting(contactFlowVoice.branches[0].transition, transitionUUIDError)
  contactFlow.modules.push(contactFlowGreeting)

  const uuidList = [contactFlowGreeting.branches[0].transition]

  let x = 100
  let y = 300

  questions.map((question, i) => {
    console.log(question)
    let position = {x: x, y: y}
    let repeatUUID = uuid()
    let stuff = {
      ownUUID: uuidList[i],
      errorUUID: transitionUUIDError,
      repeatUUID: repeatUUID,
      position: position,
      question: question
    }
  
    let contactFlowRepeat = createContactFlowRepeat(repeatUUID, uuidList[i])
    let contactFlowUserInput = createContactFlowUserInput(stuff)
    uuidList.push(contactFlowUserInput.branches[0].transition)
    contactFlow.modules.push(contactFlowUserInput)
    x = x + 200
    if (i%10 === 0 && i !== 0) {
      y = y + 200
      x = 100
    }
  })
  //question.hasOwnProperty("options")

  return contactFlow
}

export const createAmazonConnectConfig = () => {
  return (dispatch, getState) => {
    //const template = createEmptyTemplate() //connectTemplate
    const state = getState()
    const { chariteData } = state.creator
    const contactFlow = createContactFlow(chariteData)
    dispatch(setCreatedAmazonConnectConfig(contactFlow))
  }
}