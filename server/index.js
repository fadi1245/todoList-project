const express = require('express')
const app= express()
const cors = require('cors')
const db = require('./common/dbconnection')
require('dotenv').config()
app.use(express.urlencoded({extended:true}))
app.listen(process.env.port)
console.log("server runnning in port "+process.env.port)
app.use(express.json())
app.use(cors())

const taskrouter=require('./routes/taskrouter')

app.use('/task',taskrouter)