const mongoose = require('mongoose')
const dotenv = require('dotenv').config();



    // Database Connection



    mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

    const connection = mongoose.connection

    connection.once('open', ()=> {
        console.log('Database Connected')
    }).catch(err => {
        console.log('Connection Failed')
    })


