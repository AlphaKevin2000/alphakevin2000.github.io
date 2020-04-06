import * as qc from "./actions"


describe("Question actions", () => {
  let question, uuid, value, direction
  beforeEach(() => {
    question = {"fake": "question"}
    uuid = "some-fake-uuid"
    value = "some value"
    direction = 1
  })
  it("updateQuestion returns expected action", () => {
    expect(qc.updateQuestion(question)).toEqual({
      type: qc.questionActionTypes.UPDATE_QUESTION,
      payload: { question }
    })
  })
  it("removeQuestion returns expected action", () => {
    expect(qc.removeQuestion(uuid)).toEqual({
      type: qc.questionActionTypes.REMOVE_QUESTION,
      payload: { uuid }
    })
  })
  it("moveQuestion returns expected action", () => {
    expect(qc.moveQuestion(uuid, direction)).toEqual({
      type: qc.questionActionTypes.MOVE_QUESTION,
      payload: { uuid, direction }
    })
  })
})