export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE"
export const SET_INFO_MESSAGE = "SET_INFO_MESSAGE"
export const SET_SUCCESS_MESSAGE = "SET_SUCCESS_MESSAGE"
export const CHANGE_FONT = "CHANGE_FONT"

export const messageActionTypes = {
  SET_ERROR_MESSAGE,
  SET_INFO_MESSAGE,
  SET_SUCCESS_MESSAGE
}

export const UPDATE_NEW_RADIO_OPTION = "UPDATE_NEW_RADIO_OPTION"

export const changeFont = font => ({
  type: CHANGE_FONT,
  payload: {font}
})