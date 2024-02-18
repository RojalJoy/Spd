import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './JS File/HomePage';
// import MeetupPage from './MeetupPage';
import Hotel from './JS File/Hotel';
import HotelDetails from './JS File/HotelDetails';

import LoginForm from './Pages/LoginForm';

import Register from './Pages/Register'

import HomeScreen from './Pages/HomeScreen'

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/hotel/:name" element={<HotelDetails />} />
        {/* <Route path="/meetup" element={<MeetupPage />} /> */}
        {/* Pass the hotel name as a parameter to HotelDetails */}
        {<Route path="/hotel" element={<Hotel />} /> }
        {<Route path="/LoginForm" element={<LoginForm />} /> }
        {<Route path="/Register" element={<Register />} /> }

      </Routes>
    </BrowserRouter>
  );
}

export default App;
