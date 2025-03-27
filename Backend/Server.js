const App = require('./App');
const DB = require('./Config/DB')
const config = require('./Config/config')
const HTTP = require('http')
const PORT = process.env.PORT || 5000;
DB.db_connection();

const Server = HTTP.createServer(App)

Server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
    