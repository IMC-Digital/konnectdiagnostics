import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../../../api/index';

export default function OrderAppointmentDate({ order }) {
    const [appDate, setAppDate] = useState({});

    useEffect(() => {
        const getAppointmentDate = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/orders/appointment-date/${order.order_id}`);
                setAppDate(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getAppointmentDate();
    }, [setAppDate, order]);

    function convertTimeFormat(timeRange) {
        const [startTime, endTime] = timeRange.split(' - ');
        const formattedStartTime = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }).format(new Date(`2000-01-01T${startTime}`));
    
        const formattedEndTime = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }).format(new Date(`2000-01-01T${endTime}`));
    
        return `${formattedStartTime} - ${formattedEndTime}`;
    }

    return (
        <div>

            <h2 className="text-k-text">
                {order.sample_submission_type === "home" ? "Home Sample Collection" : "Diagnostic Walkin Appointment"}
            </h2>
            <p className="text-k-text small d-flex fw-bold">
                <lord-icon
                    src="https://cdn.lordicon.com/abfverha.json"
                    trigger="loop"
                    delay="2000"
                    colors="primary:#16c72e"
                    style={{ width: "20px", height: "20px" }}>
                </lord-icon>
                <span className="ms-1"> Appointment on: {`${appDate.order_session_date}, ${appDate.order_session_time && convertTimeFormat(appDate.order_session_time)}`} </span>
            </p>
        </div>
    )
}
