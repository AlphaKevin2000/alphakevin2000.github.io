import * as ops from "./operations"
import { newQuestionActionTypes } from "./actions"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe("newQuestionOperations", () => {
  const {
    TOGGLE_NEWQUESTION_MODAL,
    CHANGE_NEWQUESTION_ATTRIBUTE,
    ADD_QUESTION,
    SET_ERROR_MESSAGE
  } = newQuestionActionTypes
  let expectedActions, store
  beforeEach(() => {
    store = mockStore({
      questioncatalog: {
        newQuestion: {
          uuid: "some-fake-uuid",
          id: "D"
        },
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
        type: SET_ERROR_MESSAGE,
        payload: {
          msg: "Question with name A already exists!"
        }
      }
    ]
    store.dispatch(ops.handleAddQuestion("A"))
    expect(store.getActions()).toEqual(expectedActions)
  })
})