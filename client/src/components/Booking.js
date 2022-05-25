const Booking = ({booking, removeBooking}) => {

    const handleClick = (event) => {
        const id = event.target.value
        removeBooking(id)
    }

    return (
        <>
            <p> Client: {booking["customer_name"]} </p>
            <p> E-mail address: {booking.email} </p>
            <p> Checked-in: { booking.checkin ? "Yes" : "No" }</p>
            <button value={booking["_id"]} onClick={handleClick}>Delete booking</button>
        </>
    )
}

export default Booking