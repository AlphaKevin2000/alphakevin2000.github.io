import {
  SET_QUESTIONNAIRE_STRING_MAP,
  SET_QUESTIONNAIRE_ORDER,
  SET_LANGUAGE,
  SET_CREATED_JSON,
  SET_CREATED_AMAZON_CONNECT_CONFIG,
  ADD_CONTACT_FLOW,
  ADD_UUID,
  setQuestionnaireStrings,
  setQuestionnaireOrder,
  setLanguage,
  setCreatedJSON,
  setCreatedAmazonConnectConfig,
  addContactFlow,
  addUUID
} from "./actions"

describe("creator actionTypes", () => {
  let expectedVal
  beforeEach(() => {
  })
  it("actionType SET_QUESTIONNAIRE_STRING_MAP has expected value", () => {
    expectedVal = "SET_QUESTIONNAIRE_STRING_MAP"
    expect(SET_QUESTIONNAIRE_STRING_MAP).toEqual(expectedVal)
  })
  it("actionType SET_QUESTIONNAIRE_ORDER has expected value", () => {
    expectedVal = "SET_QUESTIONNAIRE_ORDER"
    expect(SET_QUESTIONNAIRE_ORDER).toEqual(expectedVal)
  })
  it("actionType SET_LANGUAGE has expected value", () => {
    expectedVal = "SET_LANGUAGE"
    expect(SET_LANGUAGE).toEqual(expectedVal)
  })
  it("actionType SET_CREATED_JSON has expected value", () => {
    expectedVal = "SET_CREATED_JSON"
    expect(SET_CREATED_JSON).toEqual(expectedVal)
  })
  it("actionType SET_CREATED_AMAZON_CONNECT_CONFIG has expected value", () => {
    expectedVal = "SET_CREATED_AMAZON_CONNECT_CONFIG"
    expect(SET_CREATED_AMAZON_CONNECT_CONFIG).toEqual(expectedVal)
  })
  it("actionType ADD_CONTACT_FLOW has expected value", () => {
    expectedVal = "ADD_CONTACT_FLOW"
    expect(ADD_CONTACT_FLOW).toEqual(expectedVal)
  })
  it("actionType ADD_UUID has expected value", () => {
    expectedVal = "ADD_UUID"
    expect(ADD_UUID).toEqual(expectedVal)
  })
})

describe("creator actions", () => {
  let data, expectedObj
  it("action setQuestionnaireStrings returns expected object", () => {
    data = {
      'de': [],
      'en': []
    }
    expectedObj = {
      type: SET_QUESTIONNAIRE_STRING_MAP,
      payload: { stringMap: data }
    }
    expect(setQuestionnaireStrings(data)).toEqual(expectedObj)
  })
  it("action setQuestionnaireOrder returns expected object", () => {
    data = []
    expectedObj = {
      type: SET_QUESTIONNAIRE_ORDER,
      payload: { order: data }
    }
    expect(setQuestionnaireOrder(data)).toEqual(expectedObj)
  })
  it("action setLanguage returns expected object", () => {
    data = "en"
    expectedObj = {
      type: SET_LANGUAGE,
      payload: { language: data }
    }
    expect(setLanguage(data)).toEqual(expectedObj)
  })
  it("action setCreatedJSON returns expected object", () => {
    data = []
    expectedObj = {
      type: SET_CREATED_JSON,
      payload: { data: data }
    }
    expect(setCreatedJSON(data)).toEqual(expectedObj)
  })
  it("action setCreatedAmazonConnectConfig returns expected object", () => {
    data = {}
    expectedObj = {
      type: SET_CREATED_AMAZON_CONNECT_CONFIG,
      payload: { data: data }
    }
    expect(setCreatedAmazonConnectConfig(data)).toEqual(expectedObj)
  })
  it("action addContactFlow returns expected object", () => {
    data = {}
    expectedObj = {
      type: ADD_CONTACT_FLOW,
      payload: { contactFlow: data }
    }
    expect(addContactFlow(data)).toEqual(expectedObj)
  })
  it("action addUUID returns expected object", () => {
    data = "some-pseudo-uuid"
    expectedObj = {
      type: ADD_UUID,
      payload: { uuid: data }
    }
    expect(addUUID(data)).toEqual(expectedObj)
  })
})