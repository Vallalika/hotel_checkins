import React from "react"
import Booking from "../components/Booking"

const Bookings = ({bookings, removeBooking}) => {

    const bookingsArray = bookings.map((booking, index) => {
        return <li key={index}> <Booking booking={booking} removeBooking={removeBooking}/></li>
    })

    return (
        <>
            <ul>
                {bookingsArray}
            </ul>
        </>

    )
}

export default Bookings