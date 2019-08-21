const mongoose = require('mongoose');
const keys = require('./keys.js');
const dbKey = keys.mongoID;

const connectDB = async () => {
    try {
        await mongoose.connect(dbKey, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Database connected')
    } catch (e) {
        console.error(e.message)
    }
}

module.exports = connectDB;