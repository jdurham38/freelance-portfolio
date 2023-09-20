import React, { useEffect, useState } from 'react';
import 'appointment-picker/dist/appointment-picker.css';
import AppointmentPicker from 'appointment-picker';
import emailjs from 'emailjs-com';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Booking = () => {
    const [selectedTime, setSelectedTime] = useState(null);
    const [userEmail, setUserEmail] = useState('');
    const [status, setStatus] = useState({});
    // Calculate the day after tomorrow
    const dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

    const [selectedDate, setSelectedDate] = useState(dayAfterTomorrow);

    useEffect(() => {
        const inputElement = document.getElementById('appointment-time');

        new AppointmentPicker(inputElement, {
            interval: 30,
            mode: '12h',
            minTime: 9,
            maxTime: 17,
            startTime: 9,
            endTime: 17
        });

        const handleTimeChange = function () {
            setSelectedTime(this.value);
        };

        inputElement.addEventListener('blur', handleTimeChange);

        return () => {
            inputElement.removeEventListener('blur', handleTimeChange);
        };
    }, []);



    const handleConfirmation = async (e) => {
        e.preventDefault();

        if (!selectedTime || !userEmail) {
            alert("Please select a date, time slot, and provide your email.");
            return;
        }

        // Send booking details
        const response = await emailjs.send(
            process.env.REACT_APP_EMAIL_SERVICE,
            process.env.REACT_APP_BOOKING_TEMPLATE,
            {
                date: selectedDate.toLocaleDateString(),
                time: selectedTime,
                email: userEmail,
                // ... any other parameters you want to send
            },
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );




        if (response.status === 200) {
            setStatus({ success: true, message: "Booking confirmed! An email has been sent." });
            setSelectedTime(null);
            setUserEmail('');
            e.target.reset();
        } else {
            setStatus({ success: false, message: "Something went wrong, please try again later." });
        }
    };


    const styles = {
        input: {
            width: '100%',
            padding: '10px',
            marginTop: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px'
        }
    };

    return (
        <section className="booking" id="booking">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2><b>Book Some Time With Me!</b></h2>
                            <p>Interested in talking? Book a time with me and we can discuss what you want/need.</p>

                            <form onSubmit={handleConfirmation}>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={date => setSelectedDate(date)}
                                    dateFormat="MMMM d, yyyy"
                                    className="date-picker"
                                    minDate={dayAfterTomorrow}  // Set the minimum selectable date
                                />
                                <input
                                    type="message"
                                    id="appointment-time"
                                    placeholder="Select a time slot"
                                    style={styles.input}
                                    name="message"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    style={styles.input}
                                    value={userEmail}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    name="email"
                                />
                                <button type="submit" className='bg-white mt-3 p-3 text-lg'> <b>Confirm Time Slot</b></button>
                            </form>
                            {status.message && (
                                <p className={status.success === false ? "danger" : "success"}>
                                    {status.message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
