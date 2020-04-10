import {
  scoreThresholdActionTypes,
} from "./actions"

export const initialStateScoreThresholdMap = {
  contact: {
    threshold: 14, //tage
    recoms: {
      isDanger: "Contact last 14 days",
      isSafe: "No contact last 14 days"
    }
  },
  personalInfo: {
    threshold: 0,
    recoms: {
      isDanger: "",
      isSafe: ""
    }
  },
  symptoms: {
    threshold: 0,
    recoms: {
      isDanger: "",
      isSafe: ""
    }
  },
  respiratorySymptoms: {
    threshold: 0,
    recoms: {
      isDanger: "",
      isSafe: ""
    }
  },
  illnesses: {
    threshold: 0,
    recoms: {
      isDanger: "",
      isSafe: ""
    }
  },
  medication: {
    threshold: 0,
    recoms: {
      isDanger: "",
      isSafe: ""
    }
  }
}

export const scoreThresholdMapReducer = (state = initialStateScoreThresholdMap, action) => {
  const { UPDATE_RECOM_THRESHOLD, UPDATE_RECOM_TEXT } = scoreThresholdActionTypes
  let scoreThresholdMap
  switch (action.type) {
    case UPDATE_RECOM_THRESHOLD:

      scoreThresholdMap = Object.assign({}, state)
      scoreThresholdMap[action.payload.category].threshold = action.payload.value

      return {
        ...scoreThresholdMap
      }

    case UPDATE_RECOM_TEXT:
      scoreThresholdMap = Object.assign({}, state)
      scoreThresholdMap[action.payload.category].recoms[action.payload.key] = action.payload.text

      return {
        ...scoreThresholdMap
      }
    default:
      return state
  }
}

export default scoreThresholdMapReducer