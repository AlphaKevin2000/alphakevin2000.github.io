import * as ops from "./operations"
import {
  scoreThresholdActionTypes,
} from "./actions"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


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