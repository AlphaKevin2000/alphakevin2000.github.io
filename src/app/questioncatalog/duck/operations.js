import { changeFont } from "./actions"

export const handleChangeFont = font => {
  return dispatch => {
    dispatch(changeFont(font))
  }
}