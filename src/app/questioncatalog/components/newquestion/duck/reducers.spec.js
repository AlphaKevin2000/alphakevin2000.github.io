import quesitonCatalogReducer, {
  initialStateNewQuestion,
  newQuestionReducer
} from "./reducers"
import {
  newQuestionActionTypes
} from "./actions"


describe("initialStateNewQuestion", () => {
  const keyValueTuples = [
    ["id", ""],
    ["category", ""],
    ["text", ""],
    ["inputType", ""],
    ["showNewQuestionModal", false]
  ]
  it.each(keyValueTuples)("has key %s with value %s", (c,b) => {
    expect(initialStateNewQuestion).toHaveProperty(c,b)
  })
})

describe("newQuestionReducer", () => {
  let initialState, action
  beforeEach(() => {
    initialState = initialStateNewQuestion
  })
  it("has initialState euqal to initialStateNewQuestion", () => {
    expect(newQuestionReducer(undefined, {})).toEqual(initialState)
  })
  it("should handle TOGGLE_NEWQUESTION_MODAL", () => {
    action = {
      type: "TOGGLE_NEWQUESTION_MODAL",
      payload: { value: true }
    }
    expect(newQuestionReducer(undefined, action)).toHaveProperty("showNewQuestionModal", true)
    action = {
      type: "TOGGLE_NEWQUESTION_MODAL",
      payload: { value: false }
    }
    expect(newQuestionReducer(undefined, action)).toHaveProperty("showNewQuestionModal", false)
  })
  it.each([
    ["lorem", "text"],
    ["id", "P1"]
  ])("should handle CHANGE_NEWQUESTION_ATTRIBUTE", (a,b) => {
    action = {
      type: "CHANGE_NEWQUESTION_ATTRIBUTE",
      payload: {
        value: a,
        key: b,
      }
    }
    expect(newQuestionReducer(undefined, action))
      .toHaveProperty(b, a)
  })
})