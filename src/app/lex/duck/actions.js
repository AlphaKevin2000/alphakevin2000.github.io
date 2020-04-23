export const REQUEST_DATA = "REQUEST_DATA"
export const RECEIVE_DATA = "RECEIVE_DATA"
export const RECEIVE_ERROR = "RECEIVE_ERROR"
export const SET_AWS_CREDENTIALS = "SET_AWS_CREDENTIALS"
export const SET_BOTS = "SET_BOTS"
export const SET_BOT_NAME = "SET_BOT_NAME"
export const SET_BOT_VERSION = "SET_BOT_VERSION"
export const SET_BOT = "SET_BOT"
export const SET_ERROR = "SET_ERROR"
export const ADD_INTENT = "ADD_INTENT"


export const requestData = () => ({
  type: REQUEST_DATA
})

export const receiveData = data => ({
  type: RECEIVE_DATA,
  payload: { data }
})

export const receiveError = error => ({
  type: RECEIVE_ERROR,
  payload: { error }
})

export const setAWSCredentials = awsCredentials => ({
  type: SET_AWS_CREDENTIALS,
  payload: { awsCredentials }
})

export const setBots = bots => ({
  type: SET_BOTS,
  payload: { bots }
})

export const setBotName = name => ({
  type: SET_BOT_NAME,
  payload: { name }
})

export const setBotVersion = version => ({
  type: SET_BOT_VERSION,
  payload: { version }
})

export const setBot = bot => ({
  type: SET_BOT,
  payload: { bot }
})

export const setError = error => ({
  type: SET_ERROR,
  payload: { error }
})

export const addIntent = intent => ({
  type: ADD_INTENT,
  payload: { intent }
})