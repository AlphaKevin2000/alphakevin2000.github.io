//import fetch from "cross-fetch"
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
  return {
    id: question.id,
    text: strings[question.text],
    options: options,
    nextQuestionMap: question.nextQuestionMap
  }
}

export const createDateQuestion = (question, strings) => {
  return {
    id: question.id,
    text: strings[question.text]
  }
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

export const fillTemplate = (template, data) => {
  const question1 = data[0]
  console.log({question1})
  return template
}

export const createAmazonConnectConfig = () => {
  return (dispatch, getState) => {
    const template = connectTemplate
    const state = getState()
    const { chariteData } = state.creator
    const config = fillTemplate(template, chariteData)
    dispatch(setCreatedAmazonConnectConfig(config))
  }
}