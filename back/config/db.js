const mongoose = require('mongoose');

const connectMongo = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connect to MongoDB ${conn.connection.host}`)
    } catch(error) {
        console.log('Sorry, You can not to connect..', error)
    }
}
module.exports = connectMongo;