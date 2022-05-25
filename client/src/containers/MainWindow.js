import { react, useState, useEffect } from 'react'
import CommentForm from '../components/CommentForm'
import Bookings from './Bookings'


const MainWindow = () => {

    const [bookingss, setBookings] = useState([])

    return (
    <>
        <p>Main window container</p>
        <CommentForm />
        <Bookings />
    </>
    )
}

export default MainWindow