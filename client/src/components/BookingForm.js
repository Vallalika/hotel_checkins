import { useState, useEffect } from 'react'

const BookingForm = () => {

    const [formData, setFormData] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()

    }

    const onChange = (event) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    return (
    <>
        <form onSubmit = {handleSubmit}>
            <input placeholder = "customer name" />
            <br />
            <input placeholder = "e-mail address" />
            <br />

            <input type="radio" id="ischeckedin" name="checkin" value="true" />
            <label for="ischeckedin">Checked in</label>

            <input type="radio" id="not-checkedin" name="checkin" value="false" />
            <label for="not-checkedin">Not checked in</label>
            
            <br />
            <input type="submit" value="Submit" />
        </form>
    </>
    )
}

export default BookingForm