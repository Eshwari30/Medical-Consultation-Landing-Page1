// doctorlist.js

const DoctorList = [
    // In Bangalore
    { name: 'Dr. Sunita Singh', specialization: 'Dermatologists',city:'Bangalore' },
    { name: 'Dr. John Doe', specialization: 'Cardiologist',city:'Bangalore' },
    { name: 'Dr. Santosh Kumar', specialization: 'Gastroenterologists',city:'Bangalore' },
    { name: 'Dr. Ashok Yadav', specialization: 'Hematologists',city:'Bangalore' },
    { name: 'Dr. Ananya Das', specialization: 'Neurologists',city:'Bangalore' },
    { name: 'Dr. Neha Prasad', specialization: 'Gynecologists',city:'Bangalore' },
    { name: 'Dr. Ibrahim', specialization: 'Pediatricians',city:'Bangalore' },
    { name: 'Dr. Ahalya', specialization: 'General Surgeon',city:'Bangalore' },
    { name: 'Dr. Alka Chopra', specialization: 'Orthopedic Surgeon',city:'Bangalore' },
    { name: 'Dr. Maya Sharma', specialization: 'Plastic Surgeon',city:'Bangalore' },
    
    // In Mumbai
    { name: 'Dr. Jane Smith', specialization: 'Dermatologists', city:'Mumbai' },
    { name: 'Dr. Ram Rao', specialization: 'Cardiologist', city:'Mumbai' },
    { name: 'Dr. Sunil Pandey', specialization: 'Gastroenterologists', city:'Mumbai' },
    { name: 'Dr. Manju Devi', specialization: 'Hematologists', city:'Mumbai' },
    { name: 'Dr. Rahul Reddy', specialization: 'Neurologists', city:'Mumbai' },
    { name: 'Dr. Aisha', specialization: 'Gynecologists', city:'Mumbai' },
    { name: 'Dr. Mihir Sharma', specialization: 'Pediatricians', city:'Mumbai' },
    { name: 'Dr. Yanisha', specialization: 'General Surgeon', city:'Mumbai' },
    { name: 'Dr. Shantay', specialization: 'Orthopedic Surgeon', city:'Mumbai' },
    

    // In Chennai 
    { name: 'Dr. Kalyani', specialization: 'Dermatologists', city:'Chennai' },
    { name: 'Dr. Usha Gupta', specialization: 'Cardiologist', city:'Chennai' },
    { name: 'Dr. Ameena', specialization: 'Gastroenterologists', city:'Chennai' },
    { name: 'Dr. Akhilesh Roy', specialization: 'Hematologists', city:'Chennai' },
    { name: 'Dr. Adil Khan', specialization: 'Neurologists',city:'Chennai' },
    { name: 'Dr. Ryle D', specialization: 'Gynecologists',city:'Chennai' },
   
    // In Delhi
    { name: 'Dr. Aditi Roy', specialization: 'Dermatologists',city:'Delhi' },
    { name: 'Dr. Lara Doe', specialization: 'Cardiologist',city:'Delhi' },
    { name: 'Dr. Ishani Sharma', specialization: 'Gastroenterologists',city:'Delhi' },
    { name: 'Dr. Varun Kashyap', specialization: 'Hematologists',city:'Delhi' },
    { name: 'Dr. Adil Shah', specialization: 'Neurologists',city:'Delhi' },
    { name: 'Dr. John D', specialization: 'Gynecologists',city:'Delhi' },
    { name: 'Dr. Shaleena', specialization: 'Pediatricians',city:'Delhi' },
    { name: 'Dr. Devika', specialization: 'Plastic Surgeon',city:'Delhi' },

    // In Hyderabad
    { name: 'Dr. Iniyan', specialization: 'Dermatologists',city:'Hyderabad' },
    { name: 'Dr. Siya Sharma', specialization: 'Cardiologist',city:'Hyderabad' },
    { name: 'Dr. Jenisha', specialization: 'Gastroenterologists',city:'Hyderabad' },
    { name: 'Dr. Aruna Kashyap', specialization: 'Hematologists',city:'Hyderabad' },
    { name: 'Dr. Sajan Shah', specialization: 'Neurologists',city:'Hyderabad' },
    { name: 'Dr. John D', specialization: 'Gynecologists',city:'Hyderabad' },
    { name: 'Dr. Hasina', specialization: 'Pediatricians',city:'Hyderabad' },
    { name: 'Dr. Sujay Tripati', specialization: 'Orthopedic Surgeon',city:'Hyderabad' },
    { name: 'Dr. Jamaica', specialization: 'Plastic Surgeon',city:'Hyderabad' },

    // In Jaipur
    { name: 'Dr. Ishana Roy', specialization: 'Dermatologists',city:'Jaipur' },
    { name: 'Dr. Juhi Chopra', specialization: 'Gastroenterologists',city:'Jaipur' },
    { name: 'Dr. Shalini Kashyap', specialization: 'Hematologists',city:'Jaipur' },
    { name: 'Dr. Aadhil ', specialization: 'Gynecologists',city:'Jaipur' },
    { name: 'Dr. Geet Singh', specialization: 'Pediatricians',city:'Jaipur' },
    { name: 'Dr. Dharma Singh', specialization: 'General Surgeon',city:'Jaipur' },
    { name: 'Dr. Balraj Tripati', specialization: 'Orthopedic Surgeon',city:'Jaipur' },
    { name: 'Dr. Apsara', specialization: 'Plastic Surgeon',city:'Jaipur' },
    
    // In Lucknow
    { name: 'Dr. Vandan Roy', specialization: 'Dermatologists',city:'Lucknow' },
    { name: 'Dr. Oliver Doe', specialization: 'Cardiologist',city:'Lucknow' },
    { name: 'Dr. Amulya Pandey', specialization: 'Gastroenterologists',city:'Lucknow' },
    { name: 'Dr. Varun Yadav', specialization: 'Hematologists',city:'Lucknow' },
    { name: 'Dr. Shaleena', specialization: 'Pediatricians',city:'Lucknow' },
    { name: 'Dr. Basant', specialization: 'General Surgeon',city:'Lucknow' },
    { name: 'Dr. Bhanu Kumar', specialization: 'Orthopedic Surgeon',city:'Lucknow' },
    { name: 'Dr. Devak', specialization: 'Plastic Surgeon',city:'Lucknow' },

    // In Thiruvananthapuram
    { name: 'Dr. Chandrakanta', specialization: 'Dermatologists',city:'Thiruvananthapuram' },
    { name: 'Dr. Charumati', specialization: 'Cardiologist',city:'Thiruvananthapuram' },
    { name: 'Dr. Ishani Agarwal', specialization: 'Gastroenterologists',city:'Thiruvananthapuram' },
    { name: 'Dr. Varun Kashyap', specialization: 'Hematologists',city:'Thiruvananthapuram' },
    { name: 'Dr. Adil Shah', specialization: 'Neurologists',city:'Thiruvananthapuramelhi' },
    { name: 'Dr. Lily Beckett', specialization: 'Gynecologists',city:'Thiruvananthapuram' },
    { name: 'Dr. Henry', specialization: 'Orthopedic Surgeon',city:'Thiruvananthapuram' },
    { name: 'Dr. Ramnath', specialization: 'Plastic Surgeon',city:'Thiruvananthapuram' },

    // In Bhopal
    
    { name: 'Dr. Lucy Beckett', specialization: 'Gynecologists',city:'Bhopal' },
    { name: 'Dr. Jasleen', specialization: 'Pediatricians',city:'Bhopal' },
    { name: 'Dr. Anand Bhatia', specialization: 'General Surgeon',city:'Bhopal' },
    { name: 'Dr. Noah', specialization: 'Orthopedic Surgeon',city:'Bhopal' },
    { name: 'Dr. Mayur Chopra', specialization: 'Plastic Surgeon',city:'Bhopal' },

 
    // Add more doctors with their respective details
  ];
  
  export default DoctorList;