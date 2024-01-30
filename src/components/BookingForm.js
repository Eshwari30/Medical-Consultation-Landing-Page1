// // //BookingFrom.js

import React, { useState } from 'react';
import DoctorList from './doctorlist.js';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    age: '',
    city: '',
    company: '',
    // physiotherapyExperience: '',
    selectedTime: '',
    selectedDoctor: '',
    selectedDoctorSpecialization: '',
  });

  const timeOptions = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  ];

  const [isFormComplete, setIsFormComplete] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDoctorChange = (e) => {
    const { value } = e.target;
    const selectedDoctor = DoctorList.find((doctor) => doctor.name === value);
  
    setFormData((prevData) => ({
      ...prevData,
      selectedDoctor: value,
      selectedDoctorSpecialization: selectedDoctor ? selectedDoctor.specialization : '',
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all form fields are filled
    const allFieldsFilled = Object.values(formData).every((value) => value !== '');

    if (allFieldsFilled) {
      setIsFormComplete(true);
      alert("Your booking has been submitted!");
      // Add any additional logic for handling the form submission here
    } else {
      setIsFormComplete(false);
      alert("Please fill in all the fields.");
    }
  };

  // Filter doctors based on selected city
  const filteredDoctors = DoctorList.filter((doctor) => doctor.city === formData.city);

  return (
    <section className="booking-form">
      <h2>Book a Consultation</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        {/* Step 1: Name + Phone number */}
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" placeholder='Enter Full Name' value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber" placeholder='Enter Phone Number'
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>

        {/* Step 2: Age + City + Company */}
        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" placeholder='Enter age' value={formData.age} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input type="text" name="city" placeholder='Enter City' value={formData.city} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Company:</label>
          <input type="text" name="company" placeholder='Enter your company' value={formData.company} onChange={handleInputChange} />
        </div>

        {/* Step 5: Time selection */}
        <div className="form-group">
          <label>Choose a Time:</label>
          <select
            name="selectedTime"
            value={formData.selectedTime}
            onChange={handleInputChange}
          >
            <option value="" className='op' disabled>Select a Time</option>
            {timeOptions.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        {/* Step 4: Any previous experience with physiotherapy */}
        {formData.age > 40 && (
          <div className="form-group">
            <label>Previous Experience with Physiotherapy:</label>
            <textarea
              name="physiotherapyExperience" placeholder='Text here'
              value={formData.physiotherapyExperience}
              onChange={handleInputChange}
            />
          </div>
        )}

        {/* Display available doctors based on the selected city */}
        <div className="form-group">
          <label>Choose a Doctor:</label>
          <select
            name="selectedDoctor"
            value={formData.selectedDoctor}
            onChange={handleDoctorChange}
          >
            <option value="" className='op' disabled>Select a Doctor</option>
            {filteredDoctors.map((doctor, index) => (
              <option key={index} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>

        {/* Display selected doctor in label */}
        {formData.selectedDoctor && (
          <div className="form-group">
            <label>Selected Doctor: {formData.selectedDoctor}</label>
            <br/>
            <label>Specialization: {formData.selectedDoctorSpecialization}</label>
          </div>
        )}
        <br></br>
        <button type="submit" className='btn-grid'>Book Now</button>
      </form>
    </section>
  );
}

export default BookingForm;

