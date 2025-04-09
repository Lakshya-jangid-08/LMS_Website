const mongoose = require('mongoose');
const config = require('./config');

const db_connection = async () => {
    try {
        await mongoose.connect(`${config.MONGO_URL}/LMS`);
        console.log('Database connected');
    } catch (err) {
        console.error('Database connection error:', err); // Log connection errors
    }
};

module.exports = {
    db_connection
}