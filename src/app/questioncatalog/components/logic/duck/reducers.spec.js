import  {
  initialStateScoreThresholdMap,
  scoreThresholdMapReducer
} from "./reducers"


describe("initialStateScoreThresholdMap", () => {
  const categories = [
    "contact", "personalInfo", "symptoms", "respiratorySymptoms", "illnesses", "medication"
  ]
  it.each(categories)("%s has expected keys & values", cat => {
    expect(initialStateScoreThresholdMap).toHaveProperty(cat)
    expect(initialStateScoreThresholdMap).toHaveProperty([cat, "threshold"])
    expect(initialStateScoreThresholdMap).toHaveProperty([cat, "recoms"])
    expect(initialStateScoreThresholdMap).toHaveProperty([cat, "recoms", "isDanger"])
    expect(initialStateScoreThresholdMap).toHaveProperty([cat, "recoms", "isSafe"])
  })
})

describe("scoreThresholdMapReducer", () => {
  let initialState, action
  beforeEach(() => {
    initialState = initialStateScoreThresholdMap
  })
  it("has initialState euqal to initialStateCategories", () => {
    expect(scoreThresholdMapReducer(undefined, {})).toEqual(initialState)
  })
  it("should handle UPDATE_RECOM_THRESHOLD", () => {
    action = {
      type: "UPDATE_RECOM_THRESHOLD",
      payload: { value: 0.2, category: "contact" }
    }
    expect(scoreThresholdMapReducer(undefined, action))
      .toHaveProperty(["contact", "threshold"], 0.2)
  })
  it("should handle UPDATE_RECOM_TEXT", () => {
    action = {
      type: "UPDATE_RECOM_TEXT",
      payload: {
        text: "abc",
        category: "contact",
        key: "isDanger"
      }
    }
    expect(scoreThresholdMapReducer(undefined, action))
      .toHaveProperty(["contact", "recoms", "isDanger"], "abc")
  })
})