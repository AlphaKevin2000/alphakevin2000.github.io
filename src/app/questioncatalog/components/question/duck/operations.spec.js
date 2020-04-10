import * as ops from "./operations"
import {
  questionActionTypes
} from "./actions"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("questionOperations", () => {
  const {
    REMOVE_QUESTION,
    MOVE_QUESTION,
    CHANGE_QUESTION_ATTRIBUTE
  } = questionActionTypes
  let expectedActions, store
  beforeEach(() => {
    store = mockStore({
      questioncatalog: {
          questions: [
            { uuid: "some-uuid",
              options: ["a", "b", "c"]
            }
          ]
      }
    })
  })
  it('handleRemoveQuestion creates REMOVE_QUESTION', () => {
    expectedActions = [
      {type: REMOVE_QUESTION, payload: {uuid: "some-uuid"}}
    ]
    store.dispatch(ops.handleRemoveQuestion("some-uuid"))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it("handleMoveQuestion creates MOVE_QUESTION", () => {
    expectedActions = [
      {type: MOVE_QUESTION, payload: {uuid: "some-uuid", direction: 1}}
    ]
    store.dispatch(ops.handleMoveQuestion("some-uuid", 1))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it.each([
    [true, ["", "", ""]],
    [false, undefined]
  ])
    ("handleToggleNextQuestionMap %b creates CHANGE_QUESTION_ATTRIBUTE", (checked,val) => {
      expectedActions = [{
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: val,
          attribute: "nextQuestionMap",
          uuid: "some-uuid"
        }
      }]
      store.dispatch(ops.handleToggleNextQuestionMap(checked, "some-uuid"))
      expect(store.getActions()).toEqual(expectedActions)
  })
  it.each([
    [true, [0, 0, 0]],
    [false, undefined]
  ])
    ("handleToggleScoreMap %b creates CHANGE_QUESTION_ATTRIBUTE", (checked,val) => {
      expectedActions = [{
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: val,
          attribute: "scoreMap",
          uuid: "some-uuid"
        }
      }]
      store.dispatch(ops.handleToggleScoreMap(checked, "some-uuid"))
      expect(store.getActions()).toEqual(expectedActions)
  })
  it("handleChangeQuestionID creates CHANGE_QUESTION_ATTRIBUTE", () => {
    expectedActions = [
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: "P99",
          attribute: "id",
          uuid: "some-uuid"
        }
      }
    ]
    store.dispatch(ops.handleChangeQuestionID("P99", "some-uuid"))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it("handleChangeQuestionText creates CHANGE_QUESTION_ATTRIBUTE", () => {
    expectedActions = [
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: "hello world",
          attribute: "text",
          uuid: "some-uuid"
        }
      }
    ]
    store.dispatch(ops.handleChangeQuestionText("hello world", "some-uuid"))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it("handleChangeQuestionCategory creates CHANGE_QUESTION_ATTRIBUTE", () => {
    expectedActions = [
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: "contact",
          attribute: "category",
          uuid: "some-uuid"
        }
      }
    ]
    store.dispatch(ops.handleChangeQuestionCategory("contact", "some-uuid"))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it("changeChangeQuestionType radio", () => {
    let preActions = [
      ["radio", "inputType"],
      [undefined, "scoreMap"],
      [undefined, "nextQuestionMap"]
    ].map(p => {
      return {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: p[0],
          attribute: p[1],
          uuid: "some-uuid"
        }
      }
    })
    expectedActions = [
      ...preActions,
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: [],
          attribute: "options",
          uuid: "some-uuid"
        }
      }
    ]
    store.dispatch(ops.handleChangeQuestionType("radio", "some-uuid"))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it("changeChangeQuestionType date", () => {
    let preActions = [
      ["date", "inputType"],
      [undefined, "scoreMap"],
      [undefined, "nextQuestionMap"]
    ].map(p => {
      return {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: p[0],
          attribute: p[1],
          uuid: "some-uuid"
        }
      }
    })
    expectedActions = [
      ...preActions,
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: undefined,
          attribute: "options",
          uuid: "some-uuid"
        }
      }
    ]
    store.dispatch(ops.handleChangeQuestionType("date", "some-uuid"))
    expect(store.getActions()).toEqual(expectedActions)
  })
})