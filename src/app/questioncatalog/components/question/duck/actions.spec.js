import {
  questionActionTypes,
  removeQuestion,
  addQuestion,
  moveQuestion,
  changeQuestionAttribute
} from "./actions"


describe("Question actions", () => {
  let question, uuid, value, direction
  const {
    REMOVE_QUESTION,
    ADD_QUESTION,
    MOVE_QUESTION,
    CHANGE_QUESTION_ATTRIBUTE
  } = questionActionTypes
  beforeEach(() => {
    question = {"fake": "question"}
    uuid = "some-fake-uuid"
    value = "some value"
    direction = 1
  })
  it("removeQuestion returns expected action", () => {
    expect(removeQuestion(uuid)).toEqual({
      type: REMOVE_QUESTION,
      payload: { uuid }
    })
  })
  it("addQuestion returns expected action", () => {
    expect(addQuestion(question)).toEqual({
      type: ADD_QUESTION,
      payload: { question }
    })
  })
  it("moveQuestion returns expected action", () => {
    expect(moveQuestion(uuid, direction)).toEqual({
      type: MOVE_QUESTION,
      payload: { uuid, direction }
    })
  })
  it("changeQuestionAttribute", () => {
    expect(changeQuestionAttribute("lorem", "text", "fake-uuid"))
      .toEqual({
        type: CHANGE_QUESTION_ATTRIBUTE,
        payload: {
          value: "lorem",
          attribute: "text",
          uuid: "fake-uuid"
        }
      })
  })
})