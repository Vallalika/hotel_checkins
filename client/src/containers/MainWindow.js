import { react, useState, useEffect } from 'react'
import CommentForm from '../components/BookingForm'
import Bookings from './Bookings'
const bookingsService = require('../BookingsService/BookingsService.js')


const MainWindow = () => {

    const [allBookings, setAllBookings] = useState([])
    
    useEffect(()=>{
        bookingsService.getBookings()
        .then((data)=>{
            setAllBookings(data)
        })
    },[]);

    // const addBooking = () => {
    // let temp = games.map(g => g);
    // temp.push(game);
    // setGames(temp);
    // }

    const removeBooking = (id) => {
        bookingsService.deleteBooking(id).then(() => {
            const temp = [...allBookings]
            let indexOfBookingToRemove = temp.map(booking => {
                return booking._id
            })
            .indexOf(id)
            temp.splice(indexOfBookingToRemove,1)
            setAllBookings(temp)
        })
    }

    return (
    <>
        <h1>Manage Bookings</h1>
        <CommentForm />
        <Bookings bookings={allBookings} removeBooking = {removeBooking}/>
    </>
    )
}

export default MainWindow