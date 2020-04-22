import { combineReducers } from "redux"
import creatorReducer from "./app/creator/duck"
//import reduceReducers from "reduce-reducers"
import questionCatalogReducer  from "./app/questioncatalog/duck"
import statementReducer from "./app/statements/duck"
import lexReducer from "./app/lex/duck"

export default combineReducers({
    creator: creatorReducer,
    questioncatalog: questionCatalogReducer,
    statements: statementReducer,
    lex: lexReducer
});

/* export default reduceReducers(creatorReducer, questionCatalogReducer) */