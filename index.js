const express = require('express')
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser')
require('./config/db');



const app = express()
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(',')
    ['http://localhost:5000']
  }



const PORT = process.env.PORT 
require('./config/db');

app.use(cors(corsOptions))
app.use(express.static('public'))


//Template engine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

//Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'))
app.use('/files/download', require('./routes/download'));

app.listen(PORT, () =>
{
    console.log(`Server created on ${PORT}`)
})
 