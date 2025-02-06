import React, { useState, useEffect } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SessionSelection({ checkOutFormData, setCheckOutFormData }) {
    const [activeIndex, setActiveIndex] = useState(1);
    const [currDaySessions, setCurrDaySessions] = useState([]);
    const [otherDaySessions, setOtherDaySessions] = useState([]);
    const [selectedSession, setSelectedSession] = useState(null)

    // console.log(checkOutFormData.selectedSession.date.date);
    useEffect(() => {
        function getRemainingSessions() {
            const now = new Date();
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();
            const todaySessions = [];
            const tomorrowSessions = [];
            const formatTime = (hour, minute) => {
                return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            };
            for (let hour = currentHour + 1; hour <= 20; hour++) {
                for (let minute = 0; minute < 60; minute += 60) {
                    const startTime = formatTime(hour, minute);
                    const endTime = formatTime(hour + 1, minute);
                    todaySessions.push(`${startTime} - ${endTime}`);
                }
            }
            for (let hour = 6; hour <= 20; hour++) {
                for (let minute = 0; minute < 60; minute += 60) {
                    const startTime = formatTime(hour, minute);
                    const endTime = formatTime(hour + 1, minute);
                    tomorrowSessions.push(`${startTime} - ${endTime}`);
                }
            }
            if (currentHour >= 6 && currentHour <= 20) {
                const remainingTodaySessions = todaySessions.filter(session => {
                    const sessionStartTime = session.split(' - ')[0];
                    const [sessionHour, sessionMinute] = sessionStartTime.split(':');
                    return (parseInt(sessionHour) > currentHour) || (parseInt(sessionHour) === currentHour && parseInt(sessionMinute) > currentMinute);
                });

                return { today: remainingTodaySessions, tomorrow: tomorrowSessions };
            } else {
                return { today: [], tomorrow: tomorrowSessions };
            }
        }
        const { today, tomorrow } = getRemainingSessions();
        setCurrDaySessions(today);
        setOtherDaySessions(tomorrow);
    }, []);

    const getDate = (inc) => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + inc);
        const day = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
        const month = currentDate.toLocaleDateString('en-US', { month: 'short' });
        return { day, month, date: currentDate.getDate() };
    };

    const tabs = Array.from({ length: 8 }, (_, index) => ({
        ...getDate(index),
    }));

    const handleSessionClick = (session) => {
        setSelectedSession({
            time: session,
            date: getDate(activeIndex - 1),
        });
    };

    useEffect(() => {
        setCheckOutFormData((prevData) => ({
            ...prevData,
            selectedSession: selectedSession
        }));
    }, [selectedSession, setCheckOutFormData])

    useEffect(() => {
        if (checkOutFormData.selectedSession === null) {
            return
        } else {
            setSelectedSession(checkOutFormData.selectedSession)
        }
    }, [checkOutFormData])

    return (
        <div>
            <div>
                <h2 className="text_secondary">Preferred Session</h2>
                <hr />
                <div className="d-md-flex text-white">
                    {checkOutFormData.selectedSession && (
                        <div className="d-md-flex align-items-center bg_primary py-2 px-4 rounded-top">
                            <p className='text-k-text mb-0 me-3 text-white'>Selected Session (data and time) :</p>
                            <p className="d-flex align-items-center mb-0">
                                <i className="fa-regular fa-calendar text-white pe-2"></i>
                                <span className="text-white fw-bold"> {checkOutFormData.selectedSession.date.date} {checkOutFormData.selectedSession.date.month} ( {checkOutFormData.selectedSession.time} ) </span>
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <div className='d-flex flex-wrap gap-1 py-3 bg-light rounded-3'>
                {tabs.map((item, index) => (
                    <div key={index} className='inline-block d-flex justify-content-center align-items-center flex-column'>
                        <button
                            className={`btn ${activeIndex === index + 1 ? 'btn-info' : 'btn-outline-secondary'}`}
                            onClick={() => setActiveIndex(index + 1)}
                            style={{ width: "75px" }}
                        >
                            {`${item.month} ${item.date}`} <span className="small"> {`${item.day}`} </span>
                        </button>
                    </div>
                ))}
            </div>

            <div className="tabs-content p-3">
                {activeIndex === 1 ? <div>
                    {
                        currDaySessions.map((sess, index) => (
                            <button
                                key={index}
                                className={`btn btn-outline-secondary btn-sm ${selectedSession && selectedSession.time === sess ? 'btn-info' : ''}`}
                                style={{ width: "110px", margin: "2px" }}
                                onClick={() => handleSessionClick(sess)}
                            >
                                {sess}
                            </button>
                        ))
                    }
                </div> : <div>
                    {
                        otherDaySessions.map((sess, index) => (
                            <button
                                key={index}
                                className={`btn btn-outline-secondary btn-sm ${selectedSession && selectedSession.time === sess ? 'btn-info' : ''}`}
                                style={{ width: "110px", margin: "2px" }}
                                onClick={() => handleSessionClick(sess)}
                            >
                                {sess}
                            </button>
                        ))
                    }
                </div>}
            </div>
        </div>
    );
}