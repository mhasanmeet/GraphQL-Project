const mongoose = require("mongoose")
mongoose.set("strictQuery", false);
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI,{ 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB