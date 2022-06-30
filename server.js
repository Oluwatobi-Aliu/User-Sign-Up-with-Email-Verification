require('dotenv').config()
// Import express and instantiate an app
const express = require('express')
const app = express()

// Import database function and run
const connectToDB = require('./config/db')
connectToDB()

// Import body-parser and the body parser middleware
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// import user router and use as middleware
const userRouter = require('./routes/user')
app.use('/api/users', userRouter)


// Setup server to listen
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server has started listening at ${PORT}`)
})