import creatorReducer, {initialState as _initialState } from "./reducers"
import {
  setQuestionnaireStrings,
  setQuestionnaireOrder,
  setLanguage,
  setCreatedJSON,
  setCreatedAmazonConnectConfig,
  addContactFlow,
  addUUID
} from "./actions"

describe("creatorReducer", () => {
  let initialState, action, newState
  beforeEach(() => {
    initialState = {..._initialState}
  })
  it("has a default initialState", () => {
    action = {type: "SOME_RANDOM_ACTION"}
    expect(creatorReducer(undefined, action)).toEqual(_initialState)
  })
  it("has correct state after setQuestionnaireStrings", () => {
    action = setQuestionnaireStrings()
    newState = creatorReducer(initialState, action)
    expect(newState.stringMap).toEqual(action.payload.stringMap)
    expect(newState).toEqual(Object.assign({}, initialState, action.payload))
  })
  it("has correct state after setQuestionnaireOrder", () => {
    action = setQuestionnaireOrder()
    newState = creatorReducer(initialState, action)
    expect(newState.order).toEqual(action.payload.order)
    expect(newState).toEqual(Object.assign({}, initialState, action.payload))
  })
  it("has correct state after setLanguage", () => {
    action = setLanguage()
    newState = creatorReducer(initialState, action)
    expect(newState.language).toEqual(action.payload.language)
    expect(newState).toEqual(Object.assign({}, initialState, action.payload))
  })
  it("has correct state after setCreatedJSON", () => {
    action = setCreatedJSON()
    newState = creatorReducer(initialState, action)
    expect(newState.chariteData).toEqual(action.payload.data)
    expect(newState).toEqual(Object.assign({}, initialState, action.payload))
  })
  it("has correct state after setCreatedAmazonConnectConfig", () => {
    action = setCreatedAmazonConnectConfig()
    newState = creatorReducer(initialState, action)
    expect(newState.connectConf).toEqual(action.payload.data)
    expect(newState).toEqual(Object.assign({}, initialState, action.payload))
  })
  it("has correct state after addUUID", () => {
    action = addUUID("some-fake-uuid")
    newState = creatorReducer(initialState, action)
    expect(newState.uuidList).toEqual([action.payload.uuid])
    expect(newState).toEqual(
      Object.assign({}, initialState, {uuidList: [action.payload.uuid]})
    )
    action = addUUID("another-fake-uuid")
    let anotherUUID = [action.payload.uuid]
    let expected = [...newState.uuidList, ...anotherUUID]
    newState = creatorReducer(newState, action)
    expect(newState.uuidList).toEqual(expected)
    expect(newState).toEqual(
      Object.assign({}, initialState, {uuidList: expected})
    )
  })
})