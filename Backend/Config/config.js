const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT
const MONGO_URL =  process.env.MONGO_URL
const JWT_SECERET = process.env.JWT_SECERET
const JWT_EXPIRES  = process.env.JWT_EXPIRES
const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

module.exports = {
    PORT, MONGO_URL, JWT_EXPIRES , JWT_SECERET,CLERK_WEBHOOK_SECRET
}