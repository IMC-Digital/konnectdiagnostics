import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../../../api/index';

function formatEventDateTime(eventDateTime) {
    const parts = eventDateTime.split(' ');
    const date = parts[0];
    const month = parts[1];
    const startTime = parts[3];
    const endTime = parts[5];
    const formattedDate = new Date(`${month} ${date}, ${new Date().getFullYear()} ${startTime}`);
    const formattedStartDate = new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }).format(formattedDate);
    const formattedEndDate = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }).format(new Date(`${month} ${date}, ${new Date().getFullYear()} ${endTime}`));
    return `${formattedStartDate} - ${formattedEndDate}`;
}

export default function EventDetailsSec({ order, profileData }) {
    return (
        <div className='mb-4'>
            <AppointmentTime order={order} />
            {
                order.sample_submission_type === "home" ? 
                    <OrderHomeAddressDetails orderId={order.order_id} profileData={profileData} /> 
                    : 
                    <OrderClinicAddressDetails orderId={order.order_id} />
            }
        </div>
    )
}

const AppointmentTime = ({ order }) => {
    const [session, setSession] = useState(null);
    useEffect(() => {
        const fetchSessionDetails = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/orders/appointment-date/${order.order_id}`);
                setSession(response.data || null);
            } catch (error) {
                console.log(error);
            }
        };
        fetchSessionDetails();
    }, [order]);

    return (
        <div>
            <h2 className="text-k-secondary my-3">
                {order.sample_submission_type === "home" ? "Home Sample Collection" : "Diagnostic Walkin Appointment"}
            </h2>
            <p className="text-k-text small d-flex">
                <lord-icon src="https://cdn.lordicon.com/abfverha.json" trigger="loop" colors="primary:#16c72e" style={{ width: "22px", height: "22px" }}></lord-icon>
                {session !== null ? (
                    <span className="fw-bold ms-2"> Appointment on : <span className='fw-normal'> {formatEventDateTime(session.order_session_date + " " + session.order_session_time)} </span> </span>
                ) : (
                    <span className="fw-bold ms-2"> Loading...</span>
                )}
            </p>
        </div>
    );
};

function OrderHomeAddressDetails({ orderId, profileData }) {
    const [address, setAddress] = useState(null);
    useEffect(() => {
        const fetchUserAddress = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/orders/order-user-address/${orderId}`);
                setAddress(response.data[0] || null);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUserAddress();
    }, [orderId]);

    return (
        <div className="d-flex align-items-start">
            <lord-icon
                src="https://cdn.lordicon.com/cnpvyndp.json"
                trigger="loop"
                colors="primary:#16c72e"
                style={{ width: "22px", height: "22px" }}>
            </lord-icon>
            {address !== null ? (
                <div className='ms-2'>
                    <p className="text-k-secondary">{address.address_name} </p>
                    <p className="text-k-text small">
                        <span className="fw-bold"> Address : </span>
                        <span> {address.address_line_1} {address.address_line_2} </span>
                    </p>
                    <div className='d-flex gap-3'>
                        {
                            [
                                { label: 'Locality', value: address.locality },
                                { label: 'City', value: address.city },
                                { label: 'Pincode', value: address.pincode },
                                { label: 'State', value: address.state }
                            ].map((item, index) => (
                                <p key={index} className="text-k-text small">
                                    <span className="fw-bold"> {item.label} : </span>
                                    <span> {item.value} </span>
                                </p>
                            ))
                        }
                    </div>
                    <p className="text-k-text small">
                        <span className="fw-bold"> Contact Number : </span>
                        <span className="fw-bold"> {profileData.mobile_number} </span>
                    </p>
                    <p className="text-k-text small">
                        <span className="fw-bold"> Alternative Number : </span>
                        <span className="fw-bold"> {address.alternate_mobile_number !== null ? address.alternate_mobile_number : profileData.alternate_mobile_number} </span>
                    </p>
                </div>
            ) : (
                <span className="fw-bold ms-2"> Loading... </span>
            )}

        </div>
    )
}

function OrderClinicAddressDetails({ orderId, profileData }) {
    const [clinic, setClinic] = useState(null);
    useEffect(() => {
        const fetchClinicAddress = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/orders/order-clinic-address/${orderId}`);
                setClinic(response.data[0] || null);
            } catch (error) {
                console.log(error);
            }
        };
        fetchClinicAddress();
    }, [orderId]);

    return (
        <div className="d-flex align-items-start">
            <lord-icon
                src="https://cdn.lordicon.com/cnpvyndp.json"
                trigger="loop"
                colors="primary:#16c72e"
                style={{ width: "22px", height: "22px" }}>
            </lord-icon>
            {clinic !== null ? (
                <div className='ms-2'>
                    <p className="text-k-secondary">{clinic.name} </p>
                    <p className="text-k-text small">
                        <span className="fw-bold"> Address : </span>
                        <span> {clinic.address} </span>
                    </p>
                    <div className='d-flex gap-3'>
                        {
                            [
                                { label: 'Area', value: clinic.area },
                                { label: 'City', value: clinic.city },
                                { label: 'Pincode', value: clinic.pincode }
                            ].map((item, index) => (
                                <p key={index} className="text-k-text small">
                                    <span className="fw-bold"> {item.label} : </span>
                                    <span> {item.value} </span>
                                </p>
                            ))
                        }
                    </div>
                    <p className="text-k-text small">
                        <span className="fw-bold"> Contact Number : </span>
                        <span className="fw-bold"> {clinic.telephone_number} </span>
                    </p>
                    <p className="text-k-text small">
                        <span className="fw-bold"> Alternative Number : </span>
                        <span className="fw-bold"> {clinic.email} </span>
                    </p>
                </div>
            ) : (
                <span className="fw-bold ms-2"> Loading... </span>
            )}

        </div>
    )
}

// function OrderClinicAddressDetails({ addDet }) {
//     return (
//         <div className="d-flex align-items-start">
//             <lord-icon
//                 src="https://cdn.lordicon.com/cnpvyndp.json"
//                 trigger="loop"
//                 colors="primary:#16c72e"
//                 style={{ width: "22px", height: "22px" }}>
//             </lord-icon>
//             <p className="text-k-text small mb-0 ms-2">
//                 <span className="fw-bold ms-1"> {addDet.clinic_details[0].name}  </span>
//                 <br /> <span className="fw-bold ms-1"> Address: </span> {addDet.clinic_details[0].address} - {addDet.clinic_details[0].pincode}
//                 <br /> <span className="fw-bold ms-1"> Contact Number: </span> {addDet.clinic_details[0].telephone_number}
//                 <br /> <span className="fw-bold ms-1"> email: </span> {addDet.clinic_details[0].email}
//             </p>
//         </div>
//     )
// }
