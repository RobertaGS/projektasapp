require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const connectMongo = require('./config/db');
connectMongo();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
//kuriu serveri 


const {registerUser, loginUser } = require('./controllers/userController');
const {getTransactions, setTransactions} = require('./controllers/transactionsController');

//tokiu budu as prieinu prie funkcijos
app.post('/api/user', registerUser );
app.post('/api/user/login', loginUser );
app.get('/api/transactions', getTransactions );
app.post('/api/transactions', setTransactions );



app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on PORT ${process.env.PORT}`)
})