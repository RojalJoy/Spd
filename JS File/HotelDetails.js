import React, { useState, useEffect } from 'react';
import '../CSS/Hotel.css';
import hotelsData from './hotels.json'; // Importing the JSON data

function HotelDetails() {
  const [hotelDetails, setHotelDetails] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = () => {
      const hotelName = decodeURIComponent(window.location.pathname.split('/').pop());
      const hotel = hotelsData.allHotels.find(hotel => hotel.Name === hotelName);

      if (hotel) {
        setHotelDetails(hotel);
      } else {
        setHotelDetails({ error: 'Hotel not found' });
      }
    };

    fetchHotelDetails();
  }, []);

  return (
    <div className="container">
      <h1>Hotel Details</h1>
      <div className="details">
        {hotelDetails ? (
          <>
            <img src={hotelDetails['Image-src']} alt={hotelDetails.Name} />
            <p><span>Name:</span> {hotelDetails.Name}</p>
            <p><span>Price:</span> {hotelDetails.Price}</p>
            <p><span>Special:</span> {hotelDetails.Special}</p>
            <p><span>Website:</span> <a href={hotelDetails['Website-href']} target="_blank" rel="noopener noreferrer">{hotelDetails['Website-href']}</a></p>
            <p><span>Description:</span> {hotelDetails.Description}</p>
          </>
        ) : (
          <p>{hotelDetails && hotelDetails.error}</p>
        )}
      </div>
    </div>
  );
}

export default HotelDetails;
