export interface IEvent {
    eventImage: string
    eventTitle: string
    date: string
    registeredAttendees: number
    maxAttendees: number
    price: number
    category: "paid" | "free"
}