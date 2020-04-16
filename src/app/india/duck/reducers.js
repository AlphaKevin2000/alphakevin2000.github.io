import { 
  MOVE_DBITEM,
  REMOVE_DBITEM
 } from "./actions"
import Dump from "./dump.json"

const SortedDump = Dump.sort((a,b) => parseInt(a.ID) > parseInt(b.ID) ? 1 : -1)

export const initialState = {
  dbitems: SortedDump
}

export default ( state = initialState, action) => {
  let dbitems
  switch (action.type) {
    case MOVE_DBITEM:
      let { dragIndex, dropIndex } = action.payload
      dbitems = [...state.dbitems]
      
      dbitems.splice(dropIndex, 0, dbitems.splice(dragIndex, 1)[0])
      dbitems.forEach((item,i) => item.index = i)

      return {
        ...state,
        dbitems
      }
    case REMOVE_DBITEM:
      dbitems = [...state.dbitems].filter(x => x.ID !== action.payload.id)
      return {
        ...state,
        dbitems
      }
    default:
      return state
  }
}