import * as qc from "./actions"


describe("Question actions", () => {
  let question, uuid, value, direction
  const {
    REMOVE_QUESTION,
    ADD_QUESTION,
    MOVE_QUESTION,
    CHANGE_QUESTION_ATTRIBUTE
  } = qc.questionActionTypes
  beforeEach(() => {
    question = {"fake": "question"}
    uuid = "some-fake-uuid"
    value = "some value"
    direction = 1
  })
  it("removeQuestion returns expected action", () => {
    expect(qc.removeQuestion(uuid)).toEqual({
      type: REMOVE_QUESTION,
      payload: { uuid }
    })
  })
  it("addQuestion returns expected action", () => {
    expect(qc.addQuestion(question)).toEqual({
      type: ADD_QUESTION,
      payload: { question }
    })
  })
  it("moveQuestion returns expected action", () => {
    expect(qc.moveQuestion(uuid, direction)).toEqual({
      type: MOVE_QUESTION,
      payload: { uuid, direction }
    })
  })
  it("changeQuestionAttribute", () => {
    expect(qc.changeQuestionAttribute("lorem", "text", "fake-uuid"))
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

describe("NewQuestion actions", () => {
  const {
    TOGGLE_NEWQUESTION_MODAL,
    CHANGE_NEWQUESTION_ATTRIBUTE
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

describe("Message Actions", () => {
  const {
    SET_ERROR_MESSAGE,
    SET_INFO_MESSAGE,
    SET_SUCCESS_MESSAGE
  } = qc.messageActionTypes
  it("setErrorMessage returns expected action", () => {
    expect(qc.setErrorMessage("lorem ipsum"))
      .toEqual({
        type: SET_ERROR_MESSAGE,
        payload: {
          msg: "lorem ipsum"
        }
      })
  })
})

describe("ScoreThreshold Actions", () => {
  const {
    UPDATE_RECOM_THRESHOLD,
    UPDATE_RECOM_TEXT
  } = qc.scoreThresholdActionTypes
  it("updateRecomText returns expected action", () => {
    expect(qc.updateRecomText("lorem", "contact", "isDanger"))
      .toEqual({
        type: UPDATE_RECOM_TEXT,
        payload: {
          text: "lorem",
          category: "contact",
          key: "isDanger"
        }
      })
  })
  it("updateRecomThreshold returns expected action", () => {
    expect(qc.updateRecomThreshold(2.5, "contact"))
      .toEqual({
        type: UPDATE_RECOM_THRESHOLD,
        payload: {
          value: 2.5,
          category: "contact"
        }
      })
  })
})

describe("updateNewRadioOption", () => {
  it("", () => {
    let { UPDATE_NEW_RADIO_OPTION } = qc
    expect(qc.updateNewRadioOption("foobar"))
      .toEqual({
        type: UPDATE_NEW_RADIO_OPTION,
        payload: {
          option: "foobar"
        }
      })
  })
})