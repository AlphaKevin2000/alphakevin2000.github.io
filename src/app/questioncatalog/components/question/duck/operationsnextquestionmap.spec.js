import { handleUpdateNextQuestionMapOption } from "./operations"
import { CHANGE_QUESTION_ATTRIBUTE } from "./actions"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("nextQuestionMapOperations", () => {
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
    store.dispatch(handleUpdateNextQuestionMapOption("P99", "some-uuid2", 1))
    expect(store.getActions()).toEqual(expectedActions)
  })
})