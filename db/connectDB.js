const mongoose = require('mongoose');

// Asynchronous function for connecting to MongoDB
const connectDB = async () => {
  try {
    
    const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/userAuth';
    
    // Connect to MongoDB
    await mongoose.connect(dbURI);
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1); // Exit the process with failure
  }
};

// Export the connection function
module.exports = connectDB;
