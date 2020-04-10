import * as qc from "./actions"

describe("NewQuestion actions", () => {
  const {
    TOGGLE_NEWQUESTION_MODAL,
    CHANGE_NEWQUESTION_ATTRIBUTE,
    ADD_QUESTION
  } = qc.newQuestionActionTypes
  it.each([true, false])("toggleNewQuestionModal returns expected action",
    val => {
    expect(qc.toggleNewQuestionModal(val))
      .toEqual({
        type: TOGGLE_NEWQUESTION_MODAL,
        payload: { value: val }
      })
  })
  it.each([
    ["lorem", "text"],
    ["P12", "id"],
    ["category", "contact"],
    ["inputType", "date"]
  ])("changeNewQuestionAttribute", (v,k) => {
    expect(qc.changeNewQuestionAttribute(v,k)).toEqual({
      type: CHANGE_NEWQUESTION_ATTRIBUTE,
      payload: {
        value: v,
        key: k
      }
    })
  })
})