import { radioOptionOperations } from "./operations"
import {
  UPDATE_NEW_RADIO_OPTION,
  CHANGE_QUESTION_ATTRIBUTE
} from "./actions"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe("radioOptionOperations", () => {
  const {
    handleUpdateRadioOption,
    handleUpdateNewRadioOption,
    handleAddNewRadioOption,
    handleRemoveRadioOption
  } = radioOptionOperations
  let expectedActions, store
  beforeEach(() => {
    store = mockStore({
      questioncatalog: {
        questions: [
          {
            uuid: "some-uuid",
            options: ["a", "b", "c"]
          },
          {
            uuid: "some-uuid2",
            options: ["a", "b", "c"],
            nextQuestionMap: ["P1", "P2", "P3"]
          },
          {
            uuid: "some-uuid3",
            options: ["a", "b", "c"],
            nextQuestionMap: ["P1", "P2", "P3"],
            scoreMap: [0, 1, 0]
          }
        ]
      }
    })
  })
  it("handleUpdateRadioOption creates CHANGE_QUESTION_ATTRIBUTE", () => {
    expectedActions = [
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: ["x", "b", "c"],
          attribute: "options",
          uuid: "some-uuid"
        }
      }
    ]
    store.dispatch(handleUpdateRadioOption("x", "some-uuid", 0))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it("handleUpdateNewRadioOption", () => {
    expectedActions = [
      {
        type: UPDATE_NEW_RADIO_OPTION,
        payload: {
          option: "foobar",
        }
      }
    ]
    store.dispatch(handleUpdateNewRadioOption("foobar"))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it("handleAddNewRadioOption no nextQuesitonMap no scoreMap", () => {
    expectedActions = [
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: ["a", "b", "c", "D"],
          attribute: "options",
          uuid: "some-uuid"
        }
      },
      {
        type: UPDATE_NEW_RADIO_OPTION,
        payload: {
          option: ""
        }
      }
    ]
    store.dispatch(handleAddNewRadioOption("D", "some-uuid"))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it("handleAddNewRadioOption with nextQuesitonMap no scoreMap", () => {
    expectedActions = [
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: ["P1", "P2", "P3", ""],
          attribute: "nextQuestionMap",
          uuid: "some-uuid2"
        }
      },
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: ["a", "b", "c", "D"],
          attribute: "options",
          uuid: "some-uuid2"
        }
      },
      {
        type: UPDATE_NEW_RADIO_OPTION,
        payload: {
          option: ""
        }
      }
    ]

    store.dispatch(handleAddNewRadioOption("D", "some-uuid2"))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it("handleAddNewRadioOption with nextQuesitonMap scoreMap", () => {
    expectedActions = [
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: ["P1", "P2", "P3", ""],
          attribute: "nextQuestionMap",
          uuid: "some-uuid3"
        }
      },
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: [0, 1, 0, 0],
          attribute: "scoreMap",
          uuid: "some-uuid3"
        }
      },
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: ["a", "b", "c", "D"],
          attribute: "options",
          uuid: "some-uuid3"
        }
      },
      {
        type: UPDATE_NEW_RADIO_OPTION,
        payload: {
          option: ""
        }
      }
    ]

    store.dispatch(handleAddNewRadioOption("D", "some-uuid3"))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it("handleRemoveRadioOption", () => {
    expectedActions = [
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: ["a", "c"],
          attribute: "options",
          uuid: "some-uuid"
        }
      }
    ]
    store.dispatch(handleRemoveRadioOption("some-uuid", 1))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it("handleRemoveRadioOption", () => {
    expectedActions = [
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: ["a", "c"],
          attribute: "options",
          uuid: "some-uuid"
        }
      }
    ]
    store.dispatch(handleRemoveRadioOption("some-uuid", 1))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it("handleRemoveRadioOption nextQuestionMap", () => {
    expectedActions = [
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: ["P1", "P3"],
          attribute: "nextQuestionMap",
          uuid: "some-uuid2"
        }
      },
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: ["a", "c"],
          attribute: "options",
          uuid: "some-uuid2"
        }
      }
    ]
    store.dispatch(handleRemoveRadioOption("some-uuid2", 1))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it("handleRemoveRadioOption nextQuestionMap scoreMap", () => {
    expectedActions = [
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: ["P1", "P3"],
          attribute: "nextQuestionMap",
          uuid: "some-uuid3"
        }
      },
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: [0, 0],
          attribute: "scoreMap",
          uuid: "some-uuid3"
        }
      },
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: ["a", "c"],
          attribute: "options",
          uuid: "some-uuid3"
        }
      }
    ]
    store.dispatch(handleRemoveRadioOption("some-uuid3", 1))
    expect(store.getActions()).toEqual(expectedActions)
  })
})