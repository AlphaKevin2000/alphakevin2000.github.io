import * as qc from "./actions"

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