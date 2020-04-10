export const UPDATE_RECOM_THRESHOLD = "UPDATE_RECOM_THRESHOLD"
export const UPDATE_RECOM_TEXT = "UPDATE_RECOM_TEXT"

export const scoreThresholdActionTypes = {
  UPDATE_RECOM_THRESHOLD,
  UPDATE_RECOM_TEXT
}

export const updateRecomText = (text, category, key) => ({
  type: UPDATE_RECOM_TEXT,
  payload: {text, category, key}
})

export const updateRecomThreshold = (value, category) => ({
  type: UPDATE_RECOM_THRESHOLD,
  payload: {value, category }
})