import * as ops from "./operations"
import {
  questionActionTypes,
  newQuestionActionTypes,
  messageActionTypes,
  scoreThresholdActionTypes,
  UPDATE_NEW_RADIO_OPTION,
  CHANGE_NEWQUESTION_ATTRIBUTE
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
        questions: {
          questions: [
            { uuid: "some-uuid",
              options: ["a", "b", "c"]
            }
          ]
        }
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

describe("radioOptionOperations", () => {
  const { CHANGE_QUESTION_ATTRIBUTE } = questionActionTypes
  let expectedActions, store
  beforeEach(() => {
    store = mockStore({
      questioncatalog: {
        questions: {
          questions: [
            { uuid: "some-uuid",
              options: ["a", "b", "c"]
            },
            { uuid: "some-uuid2",
              options: ["a", "b", "c"],
              nextQuestionMap: ["P1", "P2", "P3"]
            },
            { uuid: "some-uuid3",
              options: ["a", "b", "c"],
              nextQuestionMap: ["P1", "P2", "P3"],
              scoreMap: [0, 1, 0]
            }
          ]
        }
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
    store.dispatch(ops.handleUpdateRadioOption("x", "some-uuid", 0))
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
    store.dispatch(ops.handleUpdateNewRadioOption("foobar"))
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
    store.dispatch(ops.handleAddNewRadioOption("D", "some-uuid"))
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

    store.dispatch(ops.handleAddNewRadioOption("D", "some-uuid2"))
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

    store.dispatch(ops.handleAddNewRadioOption("D", "some-uuid3"))
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
    store.dispatch(ops.handleRemoveRadioOption("some-uuid", 1))
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
    store.dispatch(ops.handleRemoveRadioOption("some-uuid", 1))
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
    store.dispatch(ops.handleRemoveRadioOption("some-uuid2", 1))
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
    store.dispatch(ops.handleRemoveRadioOption("some-uuid3", 1))
    expect(store.getActions()).toEqual(expectedActions)
  })
})

describe("newQuestionOperations", () => {
  const {
    TOGGLE_NEWQUESTION_MODAL,
    CHANGE_NEWQUESTION_ATTRIBUTE,
    ADD_QUESTION,
  } = newQuestionActionTypes
  let expectedActions, store
  beforeEach(() => {
    store = mockStore({
      questioncatalog: {
        newQuestion: {
          uuid: "some-fake-uuid",
          id: "D"
        },
        questions: {
          questions: [
            { uuid: "some-uuid",
              options: ["a", "b", "c"],
              id: "A"
            },
            { uuid: "some-uuid2",
              options: ["a", "b", "c"],
              nextQuestionMap: ["P1", "P2", "P3"],
              id: "B"
            },
            { uuid: "some-uuid3",
              options: ["a", "b", "c"],
              nextQuestionMap: ["P1", "P2", "P3"],
              scoreMap: [0, 1, 0],
              id: "C"
            }
          ]
        }
      }
    })
  })
  it.each([true, false])
  ("handleToggleNewQuestionModal %b creates expected action", val => {
    expectedActions = [
      {
        type: TOGGLE_NEWQUESTION_MODAL,
        payload: { value: val }
      }
    ]
    store.dispatch(ops.handleToggleNewQuestionModal(val))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it.each([
    ["lorem", "text"],
    ["P99", "id"],
    ["date", "inputType"],
    ["personalInfo", "category"]
  ])("handleChangeNewQuestion %s %s", (v,k) => {
    expectedActions = [
      {
        type: CHANGE_NEWQUESTION_ATTRIBUTE,
        payload: {
          value: v,
          key: k
        }
      }
    ]
    store.dispatch(ops.handleChangeNewQuestion(v,k))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it("handleAddQuestion once", () => {
    expectedActions = [
      {
        type: ADD_QUESTION,
        payload: {
          question: {
            uuid: "some-fake-uuid",
            id: "D"
          }
        }
      },
      {
        type: TOGGLE_NEWQUESTION_MODAL,
        payload: { value: false }
      }
    ]
    store.dispatch(ops.handleAddQuestion("D"))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it("handleAddQuestion exists", () => {
    expectedActions = [
      {
        type: messageActionTypes.SET_ERROR_MESSAGE,
        payload: {
          msg: "Question with name A already exists!"
        }
      }
    ]
    store.dispatch(ops.handleAddQuestion("A"))
    expect(store.getActions()).toEqual(expectedActions)
  })
})

describe("logicOperations", () => {
  const {
    UPDATE_RECOM_TEXT,
    UPDATE_RECOM_THRESHOLD
  } = scoreThresholdActionTypes
  let expectedActions, store
  beforeEach(() => {
    store = mockStore({
      questioncatalog: {
        questions: {
          questions: [
            { uuid: "some-uuid",
              options: ["a", "b", "c"]
            },
            { uuid: "some-uuid2",
              options: ["a", "b", "c"],
              nextQuestionMap: ["P1", "P2", "P3"]
            },
            { uuid: "some-uuid3",
              options: ["a", "b", "c"],
              nextQuestionMap: ["P1", "P2", "P3"],
              scoreMap: [0, 1, 0]
            }
          ]
        }
      }
    })
  })
  it("handleUpdateRecomThreshold", () => {
    expectedActions = [
      {
        type: UPDATE_RECOM_THRESHOLD,
        payload: {
          value: 42,
          category: "contact"
        }
      }
    ]
    store.dispatch(ops.handleUpdateRecomThreshold(42, "contact"))
    expect(store.getActions()).toEqual(expectedActions)
  })
  it("handleUpdateRecomText", () => {
    expectedActions = [
      {
        type: UPDATE_RECOM_TEXT,
        payload: {
          text: "lorem",
          category: "contact",
          key: "isDanger"
        }
      }
    ]
    store.dispatch(ops.handleUpdateRecomText("lorem", "contact", "isDanger"))
    expect(store.getActions()).toEqual(expectedActions)
  })
})

describe("messageOperations", () => {
  const {
    SET_ERROR_MESSAGE,
    SET_INFO_MESSAGE,
    SET_SUCCESS_MESSAGE
  } = messageActionTypes
  it("", () => {})
})

describe("nextQuestionMapOperations", () => {
  const { CHANGE_QUESTION_ATTRIBUTE } = questionActionTypes
  let expectedActions, store
  beforeEach(() => {
    store = mockStore({
      questioncatalog: {
        questions: {
          questions: [
            { uuid: "some-uuid",
              options: ["a", "b", "c"]
            },
            { uuid: "some-uuid2",
              options: ["a", "b", "c"],
              nextQuestionMap: ["P1", "P2", "P3"]
            },
            { uuid: "some-uuid3",
              options: ["a", "b", "c"],
              nextQuestionMap: ["P1", "P2", "P3"],
              scoreMap: [0, 1, 0]
            }
          ]
        }
      }
    })
  })
  it("handleUpdateNextQuestionMapOption", () => {
    expectedActions = [
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: ["P1", "P99", "P3"],
          attribute: "nextQuestionMap",
          uuid: "some-uuid2",
        }
      }
    ]
    store.dispatch(ops.handleUpdateNextQuestionMapOption("P99", "some-uuid2", 1))
    expect(store.getActions()).toEqual(expectedActions)
  })
})

describe("scoreMapOperations", () => {
  const { CHANGE_QUESTION_ATTRIBUTE } = questionActionTypes
  let expectedActions, store
  beforeEach(() => {
    store = mockStore({
      questioncatalog: {
        questions: {
          questions: [
            { uuid: "some-uuid",
              options: ["a", "b", "c"]
            },
            { uuid: "some-uuid2",
              options: ["a", "b", "c"],
              nextQuestionMap: ["P1", "P2", "P3"]
            },
            { uuid: "some-uuid3",
              options: ["a", "b", "c"],
              nextQuestionMap: ["P1", "P2", "P3"],
              scoreMap: [0, 1, 0]
            }
          ]
        }
      }
    })
  })
  it("handleUpdateScoreMapOption", () => {
    expectedActions = [
      {
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: [0, 2, 0],
          attribute: "scoreMap",
          uuid: "some-uuid3",
        }
      }
    ]
    store.dispatch(ops.handleUpdateScoreMapOption(2, "some-uuid3", 1))
    expect(store.getActions()).toEqual(expectedActions)
  })
})