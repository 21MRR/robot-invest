const express = require('express');
const authController = require('./controllers/authController.js');
const settingsController = require('./controllers/settingsControllers.js');
const authMiddleware = require('./middlewares/authMiddleware.js');

require('express-async-errors');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.post('/login', authController.dLogin); 

app.get('/settings', authMiddleware, settingsController.getSettings);
    
app.post('/logout', authController.dLogout);  

app.use((error, req, res, next) =>{
    console.error(error);
})

app.use(require('./middlewares/errorMiddleware'));

module.exports = app;