import {combineReducers, createStore} from "redux";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import usersReducer from "./reducers/usersReducer";

const rootReducer = combineReducers({
    usersReducer,
})
const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25,
});

const store = createStore(rootReducer, composeEnhancers());

export default store;
