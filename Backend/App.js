const express = require('express')
const App = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
App.use(cors())

App.get('/',(req,res)=>{
    res.send('i am runing')
})

module.exports = App;