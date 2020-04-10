import  {
  initialStateCategories,
  categoriesReducer,
  initialStateCategoryBadges,
  categoryBadgesReducer,
  initialStateMessages,
  messagesReducer,
  initialStateNewRadioOption,
  newRadioOptionReducer,
  initialStateInputTypes,
  inputTypesReducer,
} from "./reducers"
import {
  messageActionTypes
} from "./actions"


describe("initialStateCategories", () => {
  it("has expected keys & values", () => {
    //expect(initialStateCategories).toHaveProperty("categories")
    expect(initialStateCategories).toHaveLength(6)
  })
})

describe("categoriesReducer", () => {
  let initialState
  beforeEach(() => {
    initialState = initialStateCategories
  })
  it("has initialState equal to initialStateCategories", () => {
    expect(categoriesReducer(undefined, {})).toEqual(initialState)
  })
})

describe("initialStateCategoryBadges", () => {
  const categoryBadgeTuples = [
    ["contact", "danger"],
    ["personalInfo", "success"],
    ["symptoms", "warning"],
    ["respiratorySymptoms", "primary"],
    ["illnesses", "dark"],
    ["medication", "secondary"]
  ]
  it.each(categoryBadgeTuples)("has key %s with value %s", (c,b) => {
    expect(initialStateCategoryBadges).toHaveProperty(c,b)
  })
})

describe("categoryBadgesReducer", () => {
  let initialState
  beforeEach(() => {
    initialState = initialStateCategoryBadges
  })
  it("has initialState euqal to initialStateCategoryBadges", () => {
    expect(categoryBadgesReducer(undefined, {})).toEqual(initialState)
  })
})

describe("initialStateMessages", () => {
  const keyValueTuples = [
    ["errorMessage", ""],
    ["infoMessage", ""],
    ["successMessage", ""]
  ]
  it.each(keyValueTuples)("has key %s with value %s", (c,b) => {
    expect(initialStateMessages).toHaveProperty(c,b)
  })
})

describe("messagesReducer", () => {
  let initialState, action, msg
  beforeEach(() => {
    initialState = initialStateMessages
  })
  it("has initialState euqal to initialStateMessages", () => {
    expect(messagesReducer(undefined, {})).toEqual(initialState)
  })
  it("should handle SET_ERROR_MESSAGE", () => {
    msg = "Something wen't terribly wrong!"
    action = {
      type: messageActionTypes.SET_ERROR_MESSAGE,
      payload: { msg }
    }
    expect(messagesReducer(undefined, action).errorMessage).toEqual(msg)
  })
})

describe("initialStateNewRadioOption", () => {
  it("has expceted values", () => {
    expect(initialStateNewRadioOption).toEqual("")
  })
})

describe("newRadioOptionReducer", () => {
  let initialState
  beforeEach(() => {
    initialState = initialStateNewRadioOption
  })
  it("has initialState euqal to initialStateNewRadioOption", () => {
    expect(newRadioOptionReducer(undefined, {})).toEqual(initialState)
  })
  it("should handle UPDATE_NEW_RADIO_OPTION", () => {
    let action = {
      type: "UPDATE_NEW_RADIO_OPTION",
      payload: {
        option: "abc"
      }
    }
    expect(newRadioOptionReducer(undefined, action))
      .toEqual("abc")
  })
})

describe("initialStateInputTypes", () => {
  it("has expected values", () => {
    expect(initialStateInputTypes).toHaveProperty([0], "radio")
    expect(initialStateInputTypes).toHaveProperty([1], "date")
  })
})

describe("inputTypesReducer", () => {
  let initialState
  beforeEach(() => {
    initialState = initialStateInputTypes
  })
  it("has initialState euqal to initialStateInputTypes", () => {
    expect(inputTypesReducer(undefined, {})).toEqual(initialState)
  })
})

/* describe("quesitonCatalogReducer", () => {

  it("", () => {
    expect(quesitonCatalogReducer(undefined, {})).toHaveProperty("questions")
    expect(quesitonCatalogReducer(undefined, {})).toHaveProperty("categories")
    expect(quesitonCatalogReducer(undefined, {})).toHaveProperty("scoreThresholdMap")
    expect(quesitonCatalogReducer(undefined, {})).toHaveProperty("categoryBadges")
    expect(quesitonCatalogReducer(undefined, {})).toHaveProperty("newQuestion")
    expect(quesitonCatalogReducer(undefined, {})).toHaveProperty("messages")
    expect(quesitonCatalogReducer(undefined, {})).toHaveProperty("newRadioOption")
    expect(quesitonCatalogReducer(undefined, {})).toHaveProperty("inputTypes")
  })
}) */