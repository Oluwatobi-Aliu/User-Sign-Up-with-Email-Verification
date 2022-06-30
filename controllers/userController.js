const UserModel = require('../models/UserModel')


const create = async (req, res, next) => {
    const { name, password, email } = req.body
    try {
        const newUser = await UserModel.create({
            name, email, password
        }
        )
        if (newUser) {
            res.status(201).json(
                newUser
            )
        }
    } catch(err) {
        console.log(err.stack)
    }
}

module.exports = {
    createUser: create
}




