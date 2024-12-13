const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.mongo_url).then(
    res=>{
        console.log("database connected successfully");
    }   
)
.catch(err=>{
    console.log("datbase connection failed")
})

