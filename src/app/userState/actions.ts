import { Dispatch } from "redux";
import { UserDefaultState } from "../../interfaces";
import { UserActions } from "./actionTypes";

export const setUserDetails = ({ token }: UserDefaultState) => {
    return (dispatch: Dispatch<UserActions>) => {
        try {
            dispatch({ type: "SET_TOKEN", payload: token })
            sessionStorage.setItem("token", token)
        } catch (error: any) {
            console.log(error.response)
        }
    }
}