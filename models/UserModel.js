const mongoose = require('mongoose')
const bcrypt = require('bc')

// Design the User database
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model("User", userSchema)