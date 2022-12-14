import { IEvent } from "../../interfaces";

import Image1 from "../images/image-1.avif";
import Image3 from "../images/image-3.avif";
import Image4 from "../images/image-4.avif";
import Image5 from "../images/image-5.avif";

export const images = [Image1, Image3, Image4, Image5];

// Events Data
export const events: IEvent[] = [
    {
        eventImage: images[Math.floor(Math.random() * images.length)],
        eventTitle: "Birthday Birthday",
        date: "July 05, 2022",
        registeredAttendees: 20,
        maxAttendees: 100,
        price: 2000,
        category: "paid"
    },
    {
        eventImage: images[Math.floor(Math.random() * images.length)],
        eventTitle: "Hangout with JO",
        date: "July 03, 2022",
        registeredAttendees: 200,
        maxAttendees: 1000,
        price: 0,
        category: "free"
    }
]

export const guests = []