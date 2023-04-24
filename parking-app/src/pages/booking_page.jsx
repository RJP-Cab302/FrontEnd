import React, { useState } from "react";

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handlePrevMonth() {
    const previousMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1);
    setSelectedDate(previousMonth);
  }

  function handleNextMonth() {
    const nextMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1);
    setSelectedDate(nextMonth);
  }

  function handleDateClick(day) {
    const clickedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    console.log(`Selected date: ${clickedDate.getDate()}/${clickedDate.getMonth() + 1}/${clickedDate.getFullYear()}`);
  }

  function renderCalendarHeader() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[selectedDate.getMonth()];
    const year = selectedDate.getFullYear();
    return (
      <div>
        <table style={{ margin: "auto" }}>
          <tbody>
            <tr>
              <td><button onClick={handlePrevMonth}>Prev</button></td>
              <td><span>{monthName} {year}</span></td>
              <td><button onClick={handleNextMonth}>Next</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  function renderCalendar() {
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();

    let rows = [];
    let cells = [];

    
    for (let i = 0; i < firstDayOfWeek; i++) {
      cells.push(
        <td key={`prev-${i}`} className="empty">&nbsp;</td>
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i);
      const dayOfWeek = date.getDay();
      const isToday = date.toDateString() === new Date().toDateString();
      const className = isToday ? "today" : "";
      cells.push(
        <td key={i} className={className} style={{textAlign: 'center'}} onClick={() => handleDateClick(i)}>{i}</td>
      );

      if (dayOfWeek === 6 || i === daysInMonth) {
        rows.push(
          <tr key={i}>
            {cells}
          </tr>
        );
        cells = [];
      }
    }

    return (
      <center><table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table></center>
    );
  }

  return (
    <div>
      <h1>Booking Page</h1>
      {renderCalendarHeader()}
      {renderCalendar()}
    </div>
  );
  }