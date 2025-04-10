const express = require('express');
const App = express();
const cors = require('cors');
const dotenv = require('dotenv');
// const { clerkWebHooks } = require('./Controllers/webHook');
dotenv.config();
App.use(cors());

App.get('/', (req, res) => {
    res.send('Backend running successfully');
});
// App.post('/clerk', express.json(), clerkWebHooks); // Ensure this route has a valid callback

module.exports = App;