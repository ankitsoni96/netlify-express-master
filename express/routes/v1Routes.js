const express = require('express')
const router = express.Router()

router.get('/login',(req,res)=>{
    res.send({
        "message":"Working111"
    })
});

module.exports.handler = router