// Import required modules
const mongoose = require('mongoose');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const User = require('./models/User'); // Make sure the path to your User model is correct
require('dotenv').config(); 
// MongoDB connection URI
const url =process.env.MONGO_URI ;

// Connect to MongoDB
mongoose.connect(url,{})
  .then(() => {
    console.log('MongoDB connected');

    // Find all users with the role of 'Crew'
    return User.find({ role: 'crew' });
  })
  .then((crewMembers) => {
    // Define the CSV writer
    const csvWriter = createCsvWriter({
      path: 'crew_members.csv',
      header: [
        { id: '_id', title: 'ID' },
        { id: 'username', title: 'Username' },
        { id: 'role', title: 'Role' }
        // Add more fields if necessary
      ]
    });

    // Write data to CSV
    return csvWriter.writeRecords(crewMembers);
  })
  .then(() => {
    console.log('Data written to CSV file successfully');
    mongoose.connection.close(); // Close the connection
  })
  .catch((error) => {
    console.error('Error:', error);
    mongoose.connection.close(); // Close the connection on error
  });
