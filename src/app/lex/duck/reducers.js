import {
  REQUEST_DATA,
  RECEIVE_DATA,
  RECEIVE_ERROR,
  SET_AWS_CREDENTIALS,
  SET_BOTS,
  SET_BOT_NAME,
  SET_BOT_VERSION,
  SET_BOT,
  SET_ERROR,
  ADD_INTENT
} from "./actions"


export const initialState = {
  bots: undefined,
  bot: undefined,
  error: undefined,
  botname: undefined,
  botversion: "$LATEST",
  intents: [],
  api: {
    isFetching: false,
    error: null,
    data: null
  },
  awsCredentials: null
}

export const apiReducer = ( state = initialState.api, action ) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_ERROR:
      return {
        ...state,
        error: action.payload.error,
        isFetching: false
      }
    case RECEIVE_DATA:
      return {
        ...state,
        data: action.payload.data,
        isFetching: false
      }
    default:
      return state
  }
}

export default ( state = initialState, action) => {
  switch(action.type) {
    case REQUEST_DATA:
    case RECEIVE_ERROR:
    case RECEIVE_DATA:
      return {
        ...state,
        api: apiReducer(state.api, action)
      }
    case SET_AWS_CREDENTIALS:
      return {
        ...state,
        awsCredentials: action.payload.awsCredentials
      }
    case SET_BOTS:
      return {
        ...state,
        bots: action.payload.bots.bots
      }
    case SET_BOT_NAME:
      return {
        ...state,
        botname: action.payload.name
      }
    case SET_BOT_VERSION:
      return {
        ...state,
        botversion: action.payload.version
      }
    case SET_BOT:
      return {
        ...state,
        bot: action.payload.bot,
        intents: []
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload.error
      }
    case ADD_INTENT:
      if (state.intents.find(intent => intent.name === action.payload.intent.name)) {
        return state
      }
      return {
        ...state,
        intents: [...state.intents, action.payload.intent]
      }
    default:
      return state
  }
}