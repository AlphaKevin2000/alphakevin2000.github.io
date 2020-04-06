import quesitonCatalogReducer, {
  initialStateQuestions,
  questionsReducer,
  initialStateCategories,
  categoriesReducer,
  initialStateScoreThresholdMap,
  scoreThresholdMapReducer,
  initialStateEditQuestion,
  editQuestionReducer,
  initialStateCategoryBadges,
  categoryBadgesReducer,
  initialStateNewQuestion,
  newQuestionReducer,
  initialStateMessages,
  messagesReducer,
  initialStateNewRadioOption,
  newRadioOptionReducer,
  initialStateInputTypes,
  inputTypesReducer
} from "./reducers"
import {
  questionActionTypes,
  messageActionTypes
} from "./actions"

//import Sample from "./sample"

describe("initialStateQuestions", () => {
  it("has expected key", () => {
    expect(initialStateQuestions).toHaveProperty("questions")
  })
  // scoreMap? nextQuestionMap?
  it.each(initialStateQuestions.questions)("question has expected properties", question => {
    expect(question).toHaveProperty("uuid")
    expect(question).toHaveProperty("id")
    expect(question).toHaveProperty("text")
    expect(question).toHaveProperty("category")
    expect(question).toHaveProperty("inputType")
    question.inputType === "radio"
      ? expect(question).toHaveProperty("options")
      : expect(question).not.toHaveProperty("options")
  })
})

describe("questionsReducer", () => {
  let initialState, action, question, uuid, direction
  beforeEach(() => {
    initialState = initialStateQuestions
  })
  it("has initialState equal to initialStateQuestions", () => {
    expect(questionsReducer(undefined, {})).toEqual(initialState)
  })
  /* it("should handle UPDATE_QUESTION", () => {
    question = initialState.questions[0]
    action = {
      type: questionActionTypes.UPDATE_QUESTION,
      payload: { question }
    }
    expect(questionsReducer(undefined, action)).toEqual({})
  }) */
  it("should handle ADD_QUESTION new question", () => {
    question = {
      "uuid": "some-fake-uuid",
    }
    action = {
      type: questionActionTypes.ADD_QUESTION,
      payload: { question }
    }
    expect(questionsReducer(undefined, action).questions).toContain(question)
  })
  it("should handle ADD_QUESTION existing question", () => {
    question = initialState.questions[0]
    action = {
      type: questionActionTypes.ADD_QUESTION,
      payload: { question }
    }
    expect(questionsReducer(undefined, action).questions.filter(q => q.uuid === question.uuid))
      .toHaveLength(1)
  })
  it("should handle REMOVE_QUESTION", () => {
    question = initialState.questions[0]
    uuid = question.uuid
    action = {
      type: questionActionTypes.REMOVE_QUESTION,
      payload: { uuid }
    }
    expect(questionsReducer(undefined, action)).not.toContain(question)
  })
  it("should handle MOVE_QUESTION upwards", () => {
    question = initialState.questions[1]
    uuid = question.uuid
    direction = -1
    action = {
      type: questionActionTypes.MOVE_QUESTION,
      payload: { uuid, direction }
    }
    //let newState = questionsReducer(undefined, action)
    expect(questionsReducer(undefined, action).questions[0]).toEqual(question)
  })
  it("should handle MOVE_QUESTION upwards first item", () => {
    question = initialState.questions[0]
    uuid = question.uuid
    direction = -1
    action = {
      type: questionActionTypes.MOVE_QUESTION,
      payload: { uuid, direction }
    }
    //let newState = questionsReducer(undefined, action)
    expect(questionsReducer(undefined, action).questions[0]).toEqual(question)
  })
  it("should handle MOVE_QUESTION downwards", () => {
    question = initialState.questions[0]
    uuid = question.uuid
    direction = 1
    action = {
      type: questionActionTypes.MOVE_QUESTION,
      payload: { uuid, direction }
    }
    expect(questionsReducer(undefined, action).questions[1]).toEqual(question)
  })
  it("should handle MOVE_QUESTION downwards last item", () => {
    question = initialState.questions.slice(-1)[0] // last question
    uuid = question.uuid
    direction = 1
    action = {
      type: questionActionTypes.MOVE_QUESTION,
      payload: { uuid, direction }
    }
    expect(questionsReducer(undefined, action).questions.slice(-1)[0]).toEqual(question)
    //expect(questionsReducer(undefined, action).questions[29]).toEqual(question)
  })
  it.each([
    ["id", "P9"],
    ["text", "lorem"],
    ["inputType", "radio"],
    ["category", "contact"]
  ])("should handle CHANGE_QUESTION_ATTRIBUTE with attribute %s and value %s",
    (attribute, value) => {
      uuid = initialState.questions[0].uuid
      action = {
        type: questionActionTypes.CHANGE_QUESTION_ATTRIBUTE,
        payload: { value, attribute, uuid }
      }
    expect(questionsReducer(undefined, action).questions[0][attribute]).toEqual(value)
  })
})

describe("initialStateCategories", () => {
  it("has expected keys & values", () => {
    expect(initialStateCategories).toHaveProperty("categories")
    expect(initialStateCategories.categories).toHaveLength(6)
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

describe("initialStateScoreThresholdMap", () => {
  const categories = [
    "contact", "personalInfo", "symptoms", "respiratorySymptoms", "illnesses", "medication"
  ]
  it.each(categories)("%s has expected keys & values", cat => {
    expect(initialStateScoreThresholdMap).toHaveProperty(cat)
    expect(initialStateScoreThresholdMap).toHaveProperty([cat, "threshold"], 0)
    expect(initialStateScoreThresholdMap).toHaveProperty([cat, "recoms"])
    expect(initialStateScoreThresholdMap).toHaveProperty([cat, "recoms", "isDanger"], "lorem")
    expect(initialStateScoreThresholdMap).toHaveProperty([cat, "recoms", "isSafe"], "ipsum")
  })
})

describe("scoreThresholdMapReducer", () => {
  let initialState
  beforeEach(() => {
    initialState = initialStateScoreThresholdMap
  })
  it("has initialState euqal to initialStateCategories", () => {
    expect(scoreThresholdMapReducer(undefined, {})).toEqual(initialState)
  })
})

describe("initialStateEditQuestion", () => {
  const keys = [
    "id", "category", "text", "inputType", "uuid", "options", "nextQuestionMap", "scoreMap"
  ]
  it.each(keys)("%s has expected keys & values", cat => {
    expect(initialStateEditQuestion).toHaveProperty(cat)
  })
})

describe("editQuestionReducer", () => {
  let initialState
  beforeEach(() => {
    initialState = initialStateEditQuestion
  })
  it("has initialState euqal to initialStateCategories", () => {
    expect(editQuestionReducer(undefined, {})).toEqual(initialState)
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

describe("initialStateNewQuestion", () => {
  const keyValueTuples = [
    ["id", ""],
    ["category", ""],
    ["text", ""],
    ["inputType", ""],
    ["showNewQuestionModal", false]
  ]
  it.each(keyValueTuples)("has key %s with value %s", (c,b) => {
    expect(initialStateNewQuestion).toHaveProperty(c,b)
  })
})

describe("newQuestionReducer", () => {
  let initialState
  beforeEach(() => {
    initialState = initialStateNewQuestion
  })
  it("has initialState euqal to initialStateNewQuestion", () => {
    expect(newQuestionReducer(undefined, {})).toEqual(initialState)
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
  const keyValueTuples = [
    ["newRadioOption", ""]
  ]
  it.each(keyValueTuples)("has key %s with value %s", (c,b) => {
    expect(initialStateNewRadioOption).toHaveProperty(c,b)
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
})

describe("initialStateInputTypes", () => {
  const keyValueTuples = [
    ["inputTypes", ["radio", "date"]]
  ]
  it.each(keyValueTuples)("has key %s with value %s", (c,b) => {
    expect(initialStateInputTypes).toHaveProperty(c,b)
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

describe("quesitonCatalogReducer", () => {
  /* const keys = ["questions, categories, scoreThresholdMap"]
  it.each(keys)("has expected keys & values", cat => {
    expect(quesitonCatalogReducer(undefined, {})).toHaveProperty(cat)
  }) */
  it("", () => {
    expect(quesitonCatalogReducer(undefined, {})).toHaveProperty("questions")
    expect(quesitonCatalogReducer(undefined, {})).toHaveProperty("categories")
    expect(quesitonCatalogReducer(undefined, {})).toHaveProperty("scoreThresholdMap")
    expect(quesitonCatalogReducer(undefined, {})).toHaveProperty("editQuestion")
    expect(quesitonCatalogReducer(undefined, {})).toHaveProperty("categoryBadges")
    expect(quesitonCatalogReducer(undefined, {})).toHaveProperty("newQuestion")
    expect(quesitonCatalogReducer(undefined, {})).toHaveProperty("messages")
    expect(quesitonCatalogReducer(undefined, {})).toHaveProperty("newRadioOption")
    expect(quesitonCatalogReducer(undefined, {})).toHaveProperty("inputTypes")
  })
})