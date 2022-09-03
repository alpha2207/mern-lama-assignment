// Packages Import
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import hotelsRoutes from './routes/hotels.js';
import roomsRoutes from './routes/rooms.js';

// Intialization
const app = express()
const port = process.env.PORT || 4000;

// Enviroment Variables Configuration
dotenv.config();

// Connecting to Database
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB");
    }
    catch(e){
        throw(e);
    }
    
}

connect();


// Middlewares
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api/hotels',hotelsRoutes);
app.use('/api/rooms',roomsRoutes);
app.use('/api/users',usersRoutes);


app.use((err,req,res,next)=>{
    const errorMessage=err.message || "Something went wrong.";
    const errStatus= err.status || 500;
    return res.status(errStatus).json({
        success:false,
        status:errStatus,
        message:errorMessage,
        stack:err.stack
    })
})

// Database connection methods
mongoose.connection.on("connected",()=>{
    console.log("DB Connected");
})

mongoose.connection.on("disconnected",()=>{
    console.log("DB Disconnected");
})

// Listening to port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})