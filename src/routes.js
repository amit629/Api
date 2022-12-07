const express=require('express')
const router=express.Router();
router.get('/fkk',(req,res)=>{
    res.json({
        "hello":"hi",
        "wtf":"data"
    })
})
module.exports={router}