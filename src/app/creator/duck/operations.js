//import fetch from "cross-fetch"
import { uuid } from "uuidv4"
import fileDownload from "js-file-download"
import JSZip from "jszip"
import {
  setQuestionnaireStrings,
  setQuestionnaireOrder,
  setLanguage,
  setCreatedJSON,
  setAmazonConnectData,
  addKey,
  setQuestionCount
} from "./actions"

import cf from "./amazon-connect/contactflow"

import { QUESTIONNAIRE_ORDER } from "./questionnaire_order"
import { QUESTIONNAIRE } from "./questionnaire_strings"

// TODO: implement a real fetch from  https://covapp.charite.de/
export const fetchData = () => {
    (async () => {
      try {
        const res = await fetch("https://covapp.charite.de/");
        
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        
        const user = await res.text();
        console.log(res)
        //console.log(url)
        console.log(user);
      } catch (err) {
        console.error(err);
      }
    })()
}

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

export const handleQuestionCount = questionCount => {
  return dispatch => {
    dispatch(setQuestionCount(questionCount))
  }
}

export const createContactFlow = () => {
  return (dispatch, getState) => {
    let state = getState()
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

    let qCount = 0

    questions.forEach((question, i) => {
      const contactFlowName = `generated_charite_data_${i}`
      const contactFlow = cf.ContactFlowQuestion({
        name: contactFlowName,
        getState: getState,
        uuidMap: uuidMap,
        question: question,
        index: i,
        addKey: addKey,
        dispatch: dispatch
      })
      qCount++
      dispatch(setAmazonConnectData({[contactFlowName]: contactFlow}))
    })
    dispatch(setQuestionCount(qCount))

    const staticStartName = "generated_charite_data_start"
    const staticStart = cf.ContactFlowStaticStart({name: staticStartName})
    dispatch(setAmazonConnectData({[staticStartName]: staticStart}))    

    state = getState()
    const { questionCount } = state.creator

    const staticEndName = `generated_charite_data_${questionCount}`
    const staticEnd = cf.ContactFlowStaticEnd({name: staticEndName, getState: getState})
    dispatch(setAmazonConnectData({[staticEndName]: staticEnd}))
  }
}