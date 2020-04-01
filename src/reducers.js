import { combineReducers } from "redux"
import creatorReducer from "./app/creator/duck"
import questioncatalogReducer  from "./app/questioncatalog/duck"

export default combineReducers({
    creator: creatorReducer,
    questioncatalog: questioncatalogReducer
});