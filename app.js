const express = require('express');
var mysql = require('mysql')
app = express()
var morgan = require('morgan')
require('dotenv').config();
var mycon = require('express-myconnection')
const api = require('./routes/methods')
const dbinfo = {
    host: '127.0.0.1',
    user: process.env.user,
    password: process.env.password,
    database: 'mysqlprac'
}
app.use(morgan('dev'))
app.use(mycon(mysql , dbinfo , 'single'))
app.use(express.urlencoded({ extended: false }))
app.use('/api', api)



app.listen(5000, ()=>(
    console.log('started at 5000')
))
