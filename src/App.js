// App.js

import React from 'react';

import './App.css';
import BookingForm from './components/BookingForm';

import HeroSection from './components/HeroSection';
import Testimonials from './components/Testimonials';

function App() {
  return (
    
    <div className="app">
    <HeroSection/>
    <BookingForm/>
    <Testimonials/>
     
    </div>
  );
}

export default App;

