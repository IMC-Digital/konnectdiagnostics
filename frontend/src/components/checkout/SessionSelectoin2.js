import React, { useState, useEffect } from 'react';

const SlotBooking = () => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState('');
  const [slots, setSlots] = useState([]);
  const [weekDates, setWeekDates] = useState([]);

  useEffect(() => {
    const getFormattedDate = (date) => {
      const options = { weekday: 'short', month: 'short', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    };

    const today = new Date();
    setCurrentMonth(today.toLocaleDateString('en-US', { month: 'long' }));

    const weekDatesArray = [today];

    for (let i = 1; i < 7; i++) {
      const nextDate = new Date();
      nextDate.setDate(today.getDate() + i);
      weekDatesArray.push(nextDate);
    }

    setDates(weekDatesArray.map((date) => getFormattedDate(date)));
    setWeekDates(weekDatesArray);
    setSelectedDate(getFormattedDate(today));
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);

      const selectedDateIndex = dates.findIndex((date) => date === selectedDate);
      const date = weekDates[selectedDateIndex];

      const timeSlots = [];
      const startTime = selectedDateIndex === 0 ? currentDate.getTime() + currentDate.getHours() * 60 * 60 * 1000 : date.getTime();
      const endTime = date.getTime() + 24 * 60 * 60 * 1000;

      for (let time = startTime; time < endTime; time += 60 * 60 * 1000) {
        const slotTime = new Date(time);
        const slotLabel = slotTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        timeSlots.push({ time: slotLabel });
      }

      setSlots(timeSlots);
    }
  }, [selectedDate, weekDates, dates]);

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleSlotSelection = (selectedSlot) => {
    console.log('Selected Slot:', selectedSlot);
  };

  return (
    <div>
      <h2>{currentMonth}</h2>
      <div className="nav nav-tabs" role="tablist">
        {dates.map((date) => (
          <button
            key={date}
            className={`nav-link ${selectedDate === date ? 'active' : ''}`}
            id={`date-tab-${date}`}
            data-bs-toggle="tab"
            role="tab"
            onClick={() => handleDateSelection(date)}
            style={{ width: "120px", textAlign: "center" }}
          >
            <div className="tab-title">
              <div>{date.substring(0, 3)}</div>
              <div className="small">{date.substring(4)}</div>
            </div>
          </button>
        ))}
      </div>
      <div className="tab-content">
        {slots.map((slot) => (
          <div key={slot.time} className={`tab-pane fade ${selectedDate === dates[0] ? 'show active' : ''}`}>
            <button className="btn btn-outline-primary" onClick={() => handleSlotSelection(slot)}>
              {slot.time}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlotBooking;
