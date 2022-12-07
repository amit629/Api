const express=require('express')
const router=express.Router();
router.get('/',(req,res)=>{
    res.json({
        "hello":"hi",
        "wtf":"data"
    })
})
module.exports={router}