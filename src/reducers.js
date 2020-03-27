import { combineReducers } from "redux"
import creatorReducer from "./app/creator/duck"

export default combineReducers({
    creator: creatorReducer
});