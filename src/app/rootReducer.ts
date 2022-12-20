import { combineReducers } from "redux";

import { userReducer } from "./userState";
import { loaders } from "./loaderStates/reducer";

export const reducers = combineReducers({
    user: userReducer,
    loaders
})

export type RootState = ReturnType<typeof reducers>