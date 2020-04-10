import {
  CHANGE_QUESTION_ATTRIBUTE,
  UPDATE_NEW_RADIO_OPTION,
  changeQuestionAttribute,
  updateNewRadioOption
} from "./actions"


describe("RadioOption actions", () => {
  let question, uuid, value, direction
  beforeEach(() => {
    question = {"fake": "question"}
    uuid = "some-fake-uuid"
    value = "some value"
    direction = 1
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
  it("updateNewRadioOption", () => {
    expect(updateNewRadioOption("foobar"))
      .toEqual({
        type: UPDATE_NEW_RADIO_OPTION,
        payload: {
          option: "foobar"
        }
      })
  })
})