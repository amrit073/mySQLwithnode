var mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    user: process.env.user,
    password: process.env.password,
    database: 'mysqlprac'
  });

const getReq = (req, res) => {
    id = req.params.id
    to_send = `select * from first_table where id = ${id}`
    con.query(to_send, (err, result) => {
      if (err) throw err
      res.send(result)
    })
  }
  
  
const getallReq = (req, res) => {
    id = req.params.id
    to_send = `select * from first_table `
    con.query(to_send, (err, result) => {
      if (err) throw err
      res.send(result)
    })
  }
  
  
  
const postReq= (req, res) => {
    const { name, surname, address } = req.body
    console.log(req.body);
    to_send = `insert into first_table values (default , "${name}","${surname}", "${address}")`
    con.query(to_send, (err, result) => {
      if (err) throw err
      res.send(result)
  
    }
    )
  }
  
const putReq= (req, res)=>{
    const { name,surname, address, id} =req.body
  to_send= `update first_table 
  set name = "${name}", 
  surname = "${surname}",
  address = "${address}"
  where id= ${id}`
  con.query(to_send, (err, result)=>{
    if (err) throw err
    res.send(result)
  })
    
  }
  
  
const deleteReq =(req, res) => {
    id = req.params.id
    to_send = `delete from first_table where id = ${id}`
    con.query(to_send, (err, result) => {
      if (err) throw err
      res.send(result)
    })
  }


module.exports= {getReq, getallReq, postReq, putReq, deleteReq}