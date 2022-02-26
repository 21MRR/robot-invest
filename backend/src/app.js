const express = require('express');
const authController = require('./controllers/authController');
require('express-async-errors');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.post('/login', authController.dLogin); 
    
app.post('/logout', authController.dLogout);  

app.use((error, req, res, next) =>{
    console.error(error);
})

app.use(require('./middlewares/errorMiddleware'));

module.exports = app;