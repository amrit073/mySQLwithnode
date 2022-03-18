const express = require('express')


const router = express.Router()


const {getReq , postReq, putReq, deleteReq, getallReq } = require('../controllers/allrequest')

router.get('/fetch', getallReq )

router.get('/fetch:id', getReq)

router.post('/add', postReq)

router.put('/update', putReq)

router.delete('./delete:id', deleteReq)

module.exports= router

