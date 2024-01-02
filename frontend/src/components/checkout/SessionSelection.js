// import React, { useState } from 'react';

// export default function SessionSelection() {
//     const [activeIndex, setActiveIndex] = useState(0);

//     const dates = new Date();
//     const dateDays = (inc) => {
//         const newDay = dates.getDay() + inc;
//         return(newDay.toLocaleDateString('en-Us', {weekday: 'short'}))
//     }

//     const tabsRender = () => {
//         const tabs = [
//             {
//                 date: dates.getDate(),
//                 month: dates.getMonth(),
//                 day: dateDays(0)
//             }, {
//                 date: dates.getDate() + 1,
//                 month: dates.getMonth(),
//                 day: dateDays(1)
//             }, {
//                 date: dates.getDate() + 2,
//                 month: dates.getMonth(),
//                 day: dates.getDay()
//             }, {
//                 date: dates.getDate() + 3,
//                 month: dates.getMonth(),
//                 day: dates.getDay()
//             }, {
//                 date: dates.getDate() + 4,
//                 month: dates.getMonth(),
//                 day: dates.getDay()
//             }, {
//                 date: dates.getDate() + 5,
//                 month: dates.getMonth(),
//                 day: dates.getDay()
//             }, {
//                 date: dates.getDate() + 6,
//                 month: dates.getMonth(),
//                 day: dates.getDay()
//             }];
//         return(
//             tabs.map((item, index) => (
//                 <button 
//                     key={index}
//                     className={`btn ${activeIndex === index + 1 ? 'btn-info' : 'btn-outline-secondary'}`}
//                     onClick={() => {setActiveIndex(index + 1)}}
//                     > {item.day} </button>
//             ))
//         )
//     } 

//     return (
//         <div>
//             <div className="d-flex flex-column justify-content-between">
//                 <h2 className="text-k-secondary">Preferred Session</h2>
//                 <p className='mb-0'>{Date()}</p>
//                 <hr />
//             </div>
//             {tabsRender()}
            
//             <div className="tabs-content">
//                 { activeIndex === 1 && "Tab 1 active" }
//                 { activeIndex === 2 && "Tab 2 active" }
//                 { activeIndex === 3 && "Tab 3 active" }
//             </div>
//         </div>
//     )
// }



// import React, { useState } from 'react';

// export default function SessionSelection() {
//     const [activeIndex, setActiveIndex] = useState(1);

//     const getDate = (inc) => {
//         const currentDate = new Date();
//         currentDate.setDate(currentDate.getDate() + inc);
//         const day = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
//         const month = currentDate.toLocaleDateString('en-US', { month: 'short' });
//         return { day, month, date: currentDate.getDate() };
//     };

//     const tabs = Array.from({ length: 10 }, (_, index) => ({
//         ...getDate(index),
//     }));

//     const tabsRender = () => {
//         return tabs.map((item, index) => (
//             <div key={index} className='inline-block border p-2'>
//                 <button
//                     className={`btn ${activeIndex === index + 1 ? 'btn-info' : 'btn-outline-secondary'}`}
//                     onClick={() => setActiveIndex(index + 1)}
//                     style={{width:"70px"}}
//                 >
//                     {`${item.day}`} 
//                     <br />
//                 </button>
//                 <p className='text-center'>
//                     {`${item.month} ${item.date}`}
//                 </p>
//             </div>
//         ));
//     };

//     return (
//         <div>
//             <div className="d-flex flex-column justify-content-between">
//                 <h2 className="text-k-secondary">Preferred Session</h2>
//                 <p className='mb-0'>{new Date().toString()}</p>
//                 <hr />
//             </div>
//             <div className='d-flex'>
//                 {tabsRender()}
//             </div>

//             <div className="tabs-content">
//                 {activeIndex && `Tab ${activeIndex} active`}
//             </div>
//         </div>
//     );
// }



import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SessionSelection() {
    const [activeIndex, setActiveIndex] = useState(1);
    // const [todaySessions, setTodaysSession] = 

    useEffect(() => {
        function getRemainingSessions() {
            const now = new Date();
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();
        
            const todaySessions = [];
            const tomorrowSessions = [];
        
            // Function to format time in hh:mm AM/PM format
            const formatTime = (hour, minute) => {
                const period = hour >= 12 ? 'PM' : 'AM';
                const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
                return `${formattedHour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${period}`;
            };
        
            // Generate remaining sessions for today
            for (let hour = currentHour + 1; hour <= 20; hour++) {
                for (let minute = 0; minute < 60; minute += 60) {
                    const startTime = formatTime(hour, minute);
                    const endTime = formatTime(hour + 1, minute);
                    todaySessions.push(`${startTime} - ${endTime}`);
                }
            }
        
            // Generate sessions for tomorrow
            for (let hour = 6; hour <= 20; hour++) {
                for (let minute = 0; minute < 60; minute += 60) {
                    const startTime = formatTime(hour, minute);
                    const endTime = formatTime(hour + 1, minute);
                    tomorrowSessions.push(`${startTime} - ${endTime}`);
                }
            }
        
            // Adjust sessions for today based on the current time
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
        
        // Example usage
        const { today, tomorrow } = getRemainingSessions();
        console.log('Remaining sessions for today:', today);
        console.log('Sessions for tomorrow:', tomorrow);
        
        
    }, [])

    const getDate = (inc) => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + inc);
        const day = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
        const month = currentDate.toLocaleDateString('en-US', { month: 'short' });
        return { day, month, date: currentDate.getDate() };
    };

    const tabs = Array.from({ length: 10 }, (_, index) => ({
        ...getDate(index),
    }));

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
    };

    const tabsRender = () => {
        return tabs.map((item, index) => (
            <div key={index} className='inline-block d-flex justify-content-center align-items-center flex-column p-2'>
                <button
                    className={`btn ${activeIndex === index + 1 ? 'btn-info' : 'btn-outline-secondary'}`}
                    onClick={() => setActiveIndex(index + 1)}
                    style={{ width: "65px" }}
                >
                    {`${item.day}`}
                    <br />
                </button>
                <p className='text-center mb-0'>
                    {`${item.month} ${item.date}`}
                </p>
            </div>
        ));
    };

    return (
        <div>
            <div className="d-flex flex-column justify-content-between">
                <h2 className="text-k-secondary">Preferred Session</h2>
                <p className='mb-0'>{new Date().toString()}</p>
                <hr />
            </div>
            <Slider {...settings} className='bg-light shadow-sm p-3 d-flex align-items-center rounded'>
                {tabsRender()}
            </Slider>

            <div className="tabs-content">

            </div>
        </div>
    );
}
