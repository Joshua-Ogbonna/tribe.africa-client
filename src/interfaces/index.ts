export interface IEvent {
    eventImage: string
    eventTitle: string
    date: string
    registeredAttendees: number
    maxAttendees: number
    price: number
    category: "paid" | "free"
}

export interface UserDefaultState {
    token: string
    isLoggedIn: boolean
    user: IUser
}
export interface IUser {
    email: string
    name: string
    profilePicture: string
    _id: string
}

export interface ILOADERS {
    buttonLoader: boolean
}