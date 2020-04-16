export const MOVE_DBITEM = "MOVE_DBITEM"
export const REMOVE_DBITEM = "REMOVE_DBITEM"


export const moveDBItem = (dragIndex, dropIndex) => ({
  type: MOVE_DBITEM,
  payload: { dragIndex, dropIndex }
})

export const removeDBItem = id => ({
  type: REMOVE_DBITEM,
  payload: { id }
})

