import { ILOADERS } from "../../interfaces";
import { LOADER_ACTIONS } from "./actionTypes";

const initialState: ILOADERS = {
    buttonLoader: false
}

export const loaders = (state = initialState, actions: LOADER_ACTIONS) => {
    const { payload, type } = actions
    switch (type) {
        case "BUTTON_LOADER":
            return {
                ...state,
                buttonLoader: payload
            }
        default:
            return state
    }
}