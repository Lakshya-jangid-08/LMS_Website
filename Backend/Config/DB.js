const mongoose = require('mongoose');
const config = require('./config');

const db_connection = async () => {
    await mongoose.connect(`${config.MONGO_URL}/LMS`).then(() => {
        console.log('Database connected');
    }).catch((err) => {
        console.error(err);
    })
}

module.exports = {
    db_connection
} 