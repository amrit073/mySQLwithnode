const express = require('express');
var mysql = require('mysql')
app = express()
require('dotenv').config();

const api = require('./routes/methods')
app.use('/api', api)
app.use(express.urlencoded({ extended: false }))

const con = mysql.createConnection({
    host: "localhost",
    user: process.env.user,
    password: process.env.password,
    database: 'mysqlprac'
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database ");
  app.listen(3000, () => {
    console.log('listening in port 3000');
  })
})





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

