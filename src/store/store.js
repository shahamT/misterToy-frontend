import { combineReducers, compose, legacy_createStore as createStore } from "redux"
import { templateReducer } from "./reducers/template.reducer.js"
import { userReducer } from "./reducers/user.reducer.js"


const rootReducer = combineReducers({
    templateModule: templateReducer, //TODO change name
    userModule: userReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store
