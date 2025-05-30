const App = require('./App');
const DB = require('./Config/DB')
const config = require('./Config/config')
const connectCloudinary = require('./Config/Cloundinary')
const HTTP = require('http')
const PORT = config.PORT || 5000;
DB.db_connection();
connectCloudinary();
const Server = HTTP.createServer(App)

Server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
    