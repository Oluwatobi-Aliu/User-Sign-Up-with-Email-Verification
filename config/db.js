const mongoose = require('mongoose')


const connectToDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true, useUnifiedTopology: true
        })
        console.log('Database is running')
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = connectToDB