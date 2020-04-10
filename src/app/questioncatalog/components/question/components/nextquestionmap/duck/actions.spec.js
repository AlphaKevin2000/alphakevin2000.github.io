import {
  CHANGE_QUESTION_ATTRIBUTE,
  changeQuestionAttribute
} from "./actions"


describe("Question actions", () => {
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