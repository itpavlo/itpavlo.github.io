import {applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import usersReducer from "./reducers/usersReducer";
import thunk from "redux-thunk";
import oksanaReducer from './reducers/oksanaReducer';

const rootReducer = combineReducers({
    usersReducer,
    oksanaReducer,
})
const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
