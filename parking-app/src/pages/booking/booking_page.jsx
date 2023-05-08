import React, { useState, useRef } from "react";
import "./booking_page-styles.scss";

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDateText, setSelectedDateText] = useState("");
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleBrand, setVehicleBrand] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [bookings, setBookings] = useState([]);
  const selectedDateRef = useRef(selectedDate);
  const [bookingPrice, setBookingPrice] = useState([]);


  function handleVehicleModelChange(event) {
    setVehicleModel(event.target.value);
  }

  function handleVehicleBrandChange(event) {
    setVehicleBrand(event.target.value);
  }

  function handleVehicleColorChange(event) {
    setVehicleColor(event.target.value);
  }

  function handleLicenseNumberChange(event) {
    setLicenseNumber(event.target.value);
  }
  
    // Call the backend API to get the price
    async function get_price_api() {
      const headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
      };
    
      const bodyContent = JSON.stringify({
        "year":2023,
        "day":160
        //"year": selectedDate.getFullYear(),
        //"day": Math.floor((selectedDate - new Date(selectedDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
      });
    
      const response = await fetch("/get_day_price", { 
        method: "POST",
        body: bodyContent,
        headers: headersList
      });
    
      const data = await response.json();
      setBookingPrice(data["Price"]);
    }

  const handleSubmission = async () => {
    // Get the selected date from the state
    const selectedDate = selectedDateRef.current;
  
    // Get the vehicle details from the input fields
    const vehicleModel = document.getElementById("vehicleModelInput").value;
    const vehicleBrand = document.getElementById("vehicleBrandInput").value;
    const vehicleColor = document.getElementById("vehicleColorInput").value;
    const licenseNumber = document.getElementById("licenseNumberInput").value;
  
    // Create a booking object with the selected date, vehicle details, and price
    const booking = {
      date: selectedDate,
      vehicle: {
        model: vehicleModel,
        brand: vehicleBrand,
        color: vehicleColor,
        licenseNumber: licenseNumber
      },
      price: bookingPrice
    };
  
    // Add the booking to the list of bookings
    setBookings([...bookings, booking]);
  
    // Reset the input fields
    document.getElementById("vehicleModelInput").value = "";
    document.getElementById("vehicleBrandInput").value = "";
    document.getElementById("vehicleColorInput").value = "";
    document.getElementById("licenseNumberInput").value = "";
  };
  
  

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
    setSelectedDate(clickedDate);
    setSelectedDateText(`${clickedDate.getDate()}/${clickedDate.getMonth() + 1}/${clickedDate.getFullYear()}`);
    get_price_api();

  }
  

  

  function renderCalendarHeader() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[selectedDate.getMonth()];
    const year = selectedDate.getFullYear();
    return (
        <div>
          <table style={{ margin: "auto", padding: "10px" }}>
            <tbody>
              <tr>
                <td><button style={{padding: "10px"}} onClick={handlePrevMonth}>Prev</button></td>
                <td><span>{monthName} {year}</span></td>
                <td><button style={{padding: "10px"}} onClick={handleNextMonth}>Next</button></td>
              </tr>
            </tbody>
          </table>
          <style>
            {`
              table button {
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                font-size: 1rem;
              }
            `}
          </style>
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
          <td key={i} className={className} style={{ textAlign: 'center', fontSize: '20px' }} onClick={() => handleDateClick(i)}>
            {i}
          </td>
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
        <div style={{textAlign: "left"}}>
          <table>
            <thead>
              <tr>
                <th style={{ padding: '10px' }}>Sun</th>
                <th style={{ padding: '10px' }}>Mon</th>
                <th style={{ padding: '10px' }}>Tue</th>
                <th style={{ padding: '10px' }}>Wed</th>
                <th style={{ padding: '10px' }}>Thu</th>
                <th style={{ padding: '10px' }}>Fri</th>
                <th style={{ padding: '10px' }}>Sat</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      );
    
    }
    
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const day = selectedDate.getDate();
    const monthIndex = selectedDate.getMonth();
    const year = selectedDate.getFullYear();

    const monthName = monthNames[monthIndex];

    const formattedDate = `${day} ${monthName}, ${year}`;



    

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "center" }} colSpan={7}>
                  <h1>Booking Page</h1>
                  {renderCalendarHeader()}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ verticalAlign: "top" }}>
                  <div style={{ width: "230px", border: "2px solid black", backgroundColor: "blue", color: "white", padding: "10px", borderRadius: "5px", marginRight: "20px" }}>
                    <div style={{ fontSize: "20px", marginBottom: "10px" }}>Vehicle description</div>
                    <div>
                      <label>Vehicle model:</label>
                      <input type="text" name="vehicle-model" id="vehicleModelInput" onChange={(e) => setVehicleModel(e.target.value)} />
                    </div>
                    <div>
                      <label>Vehicle brand:</label>
                      <input type="text" name="vehicle-brand" id="vehicleBrandInput" onChange={(e) => setVehicleBrand(e.target.value)} />
                    </div>
                    <div>
                      <label>Colour:</label>
                      <input type="text" name="colour" id="vehicleColorInput" onChange={(e) => setVehicleColor(e.target.value)} />
                    </div>
                    <div>
                      <label>License number:</label>
                      <input type="text" name="license-number" id="licenseNumberInput" onChange={(e) => setLicenseNumber(e.target.value)} />
                    </div>
                    <button style={{ marginTop: "10px" }} onClick={handleSubmission}>Submit</button>
                  </div>
                </td>
                <td style={{ verticalAlign: "top", textAlign: "center" }}>
                  {renderCalendar()}
                </td>
                <td style={{ verticalAlign: "top", paddingLeft: "20px" }}>
                  <div style={{ border: "2px solid black", backgroundColor: "blue", color: "white", padding: "10px", borderRadius: "5px" }}>
                    <div style={{ fontSize: "20px", marginBottom: "5px" }}>Selected date:</div>
                    <div>{formattedDate}</div>
                    <div style={{ marginTop: "10px" }}>Booking price: ${bookingPrice}</div>
                    <button onClick={handleSubmission}>Book Now</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
    
      
      
      
      
    
  }