import { UserDefaultState } from "../../interfaces";
import { UserActions } from "./actionTypes";

const initialState: UserDefaultState = {
    token: sessionStorage.getItem("token") || "",
    isLoggedIn: sessionStorage.getItem("token") ? true : false,
    user: {
        name: "",
        email: "",
        profilePicture: "",
        _id: ""
    }
}

export const userReducer = (state = initialState, actions: UserActions) => {
    const { type, payload } = actions
    switch (type) {
        case "SET_TOKEN":
            sessionStorage.setItem("token", payload)
            return {
                ...state,
            }
        default:
            return state
    }
}