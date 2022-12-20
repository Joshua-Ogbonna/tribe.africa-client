import { Dispatch } from "redux"
import { LOADER_ACTIONS } from "./actionTypes"

export const toggleLoader = (option: boolean) => {
    return (dispatch: Dispatch<LOADER_ACTIONS>) => {
        dispatch({ type: "BUTTON_LOADER", payload: option })
    }
}