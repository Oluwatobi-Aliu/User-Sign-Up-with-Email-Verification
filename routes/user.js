// Import validation middleware
const { validateUser, validate } = require("../middlewares/validator")

// Import express and create an express router
const express = require('express')
const router = express.Router()

// Import user controller
const userControls = require("../controllers/userController.js")



router.post('/create', validateUser, validate, userControls.createUser)



// Export express router
module.exports = router