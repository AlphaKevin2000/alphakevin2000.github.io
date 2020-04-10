import {
  initialStateQuestions,
  questionsReducer,
  findTargetQuestionIndex,
  findTargetQuestion
} from "./reducers"
import {
  questionActionTypes,
} from "./actions"

//import Sample from "./sample"

describe("findTargetQuestionIndex", () => {
  let questions = initialStateQuestions
  it.each([0,1,3,5])("returns expected index %i", i => {
    expect(findTargetQuestionIndex(questions, questions[i].uuid)).toEqual(i)
  })
  
})

describe("findTargetQuestion", () => {
  let questions = initialStateQuestions
  console.log({questions})
  it.each([0,1,3,5])("returns expected question", i => {
    expect(findTargetQuestion(questions, questions[i].uuid)).toEqual(questions[i])
  })
})

describe("initialStateQuestions", () => {
  // scoreMap? nextQuestionMap?
  it.each(initialStateQuestions)("question has expected properties", question => {
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
  it("should handle ADD_QUESTION new question", () => {
    question = {
      "uuid": "some-fake-uuid",
    }
    action = {
      type: questionActionTypes.ADD_QUESTION,
      payload: { question }
    }
    expect(questionsReducer(undefined, action)).toContain(question)
  })
  it("should handle ADD_QUESTION existing question", () => {
    question = initialState[0]
    action = {
      type: questionActionTypes.ADD_QUESTION,
      payload: { question }
    }
    expect(questionsReducer(undefined, action).filter(q => q.uuid === question.uuid))
      .toHaveLength(1)
  })
  it("should handle REMOVE_QUESTION", () => {
    question = initialState[0]
    uuid = question.uuid
    action = {
      type: questionActionTypes.REMOVE_QUESTION,
      payload: { uuid }
    }
    expect(questionsReducer(undefined, action)).not.toContain(question)
  })
  it("should handle MOVE_QUESTION upwards", () => {
    question = initialState[1]
    uuid = question.uuid
    direction = -1
    action = {
      type: questionActionTypes.MOVE_QUESTION,
      payload: { uuid, direction }
    }
    //let newState = questionsReducer(undefined, action)
    expect(questionsReducer(undefined, action)[0]).toEqual(question)
  })
  it("should handle MOVE_QUESTION upwards first item", () => {
    question = initialState[0]
    uuid = question.uuid
    direction = -1
    action = {
      type: questionActionTypes.MOVE_QUESTION,
      payload: { uuid, direction }
    }
    //let newState = questionsReducer(undefined, action)
    expect(questionsReducer(undefined, action)[0]).toEqual(question)
  })
  it("should handle MOVE_QUESTION downwards", () => {
    question = initialState[0]
    uuid = question.uuid
    direction = 1
    action = {
      type: questionActionTypes.MOVE_QUESTION,
      payload: { uuid, direction }
    }
    expect(questionsReducer(undefined, action)[1]).toEqual(question)
  })
  it("should handle MOVE_QUESTION downwards last item", () => {
    question = initialState.slice(-1)[0] // last question
    uuid = question.uuid
    direction = 1
    action = {
      type: questionActionTypes.MOVE_QUESTION,
      payload: { uuid, direction }
    }
    expect(questionsReducer(undefined, action).slice(-1)[0]).toEqual(question)
    //expect(questionsReducer(undefined, action).questions[29]).toEqual(question)
  })
  it.each([
    ["id", "P9"],
    ["text", "lorem"],
    ["inputType", "radio"],
    ["category", "contact"]
  ])("should handle CHANGE_QUESTION_ATTRIBUTE with attribute %s and value %s",
    (attribute, value) => {
      uuid = initialState[0].uuid
      action = {
        type: questionActionTypes.CHANGE_QUESTION_ATTRIBUTE,
        payload: { value, attribute, uuid }
      }
    expect(questionsReducer(undefined, action)[0][attribute]).toEqual(value)
  })
})