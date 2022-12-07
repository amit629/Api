const express=require('express')
const app=express();
const {router}=require('./routes')
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/',router)

app.listen(3003,()=>{
    console.log('server running on port 3000');
})

