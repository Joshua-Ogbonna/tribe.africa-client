import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { reducers } from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension'

// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)))
export type RootDispatch = typeof store.dispatch