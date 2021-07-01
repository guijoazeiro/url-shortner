const express = require("express")
require("dotenv").config()

const connectDB = require('./config/db')

const app = express()

connectDB()


const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});
