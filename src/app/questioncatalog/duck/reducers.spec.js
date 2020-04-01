import creatorReducer, {initialState as _initialState } from "./reducers"
import {

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
})