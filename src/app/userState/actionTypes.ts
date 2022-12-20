import { IUser } from "../../interfaces"

interface SET_USER {
    type: "SET_USER"
    payload: {
        user: IUser,
        token: string
    }
}

interface SET_TOKEN {
    type: "SET_TOKEN"
    payload: string
}

export type UserActions = SET_USER | SET_TOKEN