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

// mysql.createConnection(dbinfo).connect(err=>console.log(err))

app.listen(5000, ()=>(
    console.log('started at 5000')
))



// app.get('/api:id', (req, res) => {
//   id = req.params.id
//   to_send = `select * from first_table where id = ${id}`
//   con.query(to_send, (err, result) => {
//     if (err) throw err
//     res.send(result)
//   })
// }
// )




// app.get('/api', (req, res) => {
//   id = req.params.id
//   to_send = `select * from first_table `
//   con.query(to_send, (err, result) => {
//     if (err) throw err
//     res.send(result)
//   })
// }
// )


// app.post('/api', (req, res) => {
//   const { name, surname, address } = req.body
//   console.log(req.body);
//   to_send = `insert into first_table values (default , "${name}","${surname}", "${address}")`
//   con.query(to_send, (err, result) => {
//     if (err) throw err
//     res.send(result)

//   }
//   )
// })

// app.put('/api', (req, res)=>{
//   const { name,surname, address, id} =req.body
// to_send= `update first_table 
// set name = "${name}", 
// surname = "${surname}",
// address = "${address}"
// where id= ${id}`
// con.query(to_send, (err, result)=>{
//   if (err) throw err
//   res.send(result)
// })
  
// })


// app.delete('/api:id', (req, res) => {
//   id = req.params.id
//   to_send = `delete from first_table where id = ${id}`
//   con.query(to_send, (err, result) => {
//     if (err) throw err
//     res.send(result)
//   })
// }
// )

