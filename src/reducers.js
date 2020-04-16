import { combineReducers } from "redux"
import creatorReducer from "./app/creator/duck"
//import reduceReducers from "reduce-reducers"
import questionCatalogReducer  from "./app/questioncatalog/duck"
import statementReducer from "./app/statements/duck"
import indiaReducer from "./app/india/duck"

export default combineReducers({
    creator: creatorReducer,
    questioncatalog: questionCatalogReducer,
    statements: statementReducer,
    india: indiaReducer
});

/* export default reduceReducers(creatorReducer, questionCatalogReducer) */