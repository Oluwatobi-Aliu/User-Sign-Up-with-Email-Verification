const { validationResult } = require('express-validator')
const { check } = require('express-validator')


exports.validateUser = [
    check("name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name is missing")
    .isLength({ min: 3, max: 20 })
    .withMessage("Name must be 3 to 20 characters long"),
    check("email")
    .normalizeEmail()
    .isEmail()
    .withMessage(
        "email is not valid!"
    ),
    check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is missing")
    .isLength({min: 6})
    .withMessage("Password is missing!")
]

exports.validate = (req, res, next) => {
    const error = validationResult(req).array()
    if (!error.length) {
        return next()
    }

    res.status(400).json({
        success: false, error: error[0].msg
    })
}
