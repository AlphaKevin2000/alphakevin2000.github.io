/* import fileDownload from "js-file-download"
import JSZip from "jszip" */
import {
  moveDBItem,
  removeDBItem
} from "./actions"

export const handleMoveDBItem = (dragIndex, dropIndex) => {
  return dispatch => {
    dispatch(moveDBItem(dragIndex, dropIndex))
  }
}

export const handleRemoveDBItem = id => {
  return dispatch => {
    dispatch(removeDBItem(id))
  }
}